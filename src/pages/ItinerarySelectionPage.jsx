import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ItineraryCard from '../components/features/itinerary/ItineraryCard';
import AIItineraryGenerator from '../components/features/ai/AiItineraryGenerator'; // Corretto il nome del componente
import { getItineraries } from '../services/api/itineraryService';

const ItinerarySelectionPage = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract search parameters
  const [searchParams] = useState(() => {
    const params = new URLSearchParams(location.search);
    return {
      duration: params.get('duration') || '',
      budget: params.get('budget') || '',
      interests: params.get('interests') || ''
    };
  });

  // Memoized fetch function with proper dependencies
  const fetchItineraries = useCallback(async () => {
    // Timeout safety
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setError('Request timeout. Please try again later.');
    }, 15000);
    
    setLoading(true);
    setError(null);
    
    try {
      const allItineraries = await getItineraries();
      clearTimeout(timeoutId);
      
      // Debug logging
      console.log('Search parameters:', searchParams);
      console.log('API returned itineraries:', allItineraries);
      
      if (!allItineraries || !Array.isArray(allItineraries)) {
        throw new Error('Invalid data received from server');
      }
      
      // Se non ci sono parametri di ricerca, mostra tutti gli itinerari
      if (!searchParams.duration && !searchParams.budget && !searchParams.interests) {
        console.log('Nessun parametro di ricerca, mostro tutti gli itinerari');
        setItineraries(allItineraries);
        return;
      }
      
      // Improved filtering with more flexible matching
      let filteredItineraries = allItineraries.filter(itinerary => {
        if (!itinerary) return false;
        
        // Duration filter - conversione e confronto più preciso
        const itineraryDuration = String(itinerary.duration || '').trim();
        const userDuration = String(searchParams.duration || '').trim();
        
        // Estrai solo il numero dalla durata (ad es. da "8 ore" prendi "8")
        const extractNumber = (str) => {
          const matches = str.match(/^(\d+)/);
          return matches ? matches[1] : str;
        };
        
        const itineraryDurationNum = parseInt(extractNumber(itineraryDuration), 10);
        const userDurationNum = parseInt(extractNumber(userDuration), 10);
        
        // Confronta i numeri se sono validi, altrimenti confronta le stringhe
        const matchesDuration = !userDuration || 
          itineraryDuration === userDuration || 
          ((!isNaN(itineraryDurationNum) && !isNaN(userDurationNum)) && 
           itineraryDurationNum === userDurationNum);
        
        // Budget filter - conversione e confronto più preciso
        let matchesBudget = true;
        if (searchParams.budget) {
          // Normalizza i valori di budget
          const budgetMap = {
            'economico': 50,
            'medio': 150,
            'premium': 500
          };
          
          // Converti stringhe in valori numerici quando possibile
          let itineraryBudgetNum;
          let userBudgetNum;
          
          // Gestisci il budget dell'itinerario
          const itineraryBudgetStr = String(itinerary.budget || '').toLowerCase().trim();
          if (budgetMap[itineraryBudgetStr] !== undefined) {
            itineraryBudgetNum = budgetMap[itineraryBudgetStr];
          } else {
            itineraryBudgetNum = parseInt(itineraryBudgetStr, 10);
          }
          
          // Gestisci il budget dell'utente
          const userBudgetStr = String(searchParams.budget || '').toLowerCase().trim();
          if (budgetMap[userBudgetStr] !== undefined) {
            userBudgetNum = budgetMap[userBudgetStr];
          } else {
            userBudgetNum = parseInt(userBudgetStr, 10);
          }
          
          // Se entrambi sono numeri validi, confrontali
          if (!isNaN(itineraryBudgetNum) && !isNaN(userBudgetNum)) {
            matchesBudget = itineraryBudgetNum <= userBudgetNum;
          } else {
            // Confronta le priorità dei budget
            const budgetPriority = {
              'economico': 1,
              'medio': 2,
              'premium': 3
            };
            
            const itineraryPriority = budgetPriority[itineraryBudgetStr] || 2; // Default a medio
            const userPriority = budgetPriority[userBudgetStr] || 2; // Default a medio
            
            matchesBudget = itineraryPriority <= userPriority;
          }
        }
        
        // Interests filter - migliorato per maggiore precisione
        let matchesInterests = !searchParams.interests;
        
        if (searchParams.interests) {
          const userInterests = searchParams.interests.toLowerCase().trim();
          
          // Controlla nei tag degli interessi
          if (Array.isArray(itinerary.highlights)) {
            matchesInterests = itinerary.highlights.some(highlight => 
              highlight && highlight.toLowerCase().includes(userInterests)
            );
          }
          
          // Controlla anche nel titolo e nella descrizione
          if (!matchesInterests && itinerary.title) {
            matchesInterests = itinerary.title.toLowerCase().includes(userInterests);
          }
          
          if (!matchesInterests && itinerary.description) {
            matchesInterests = itinerary.description.toLowerCase().includes(userInterests);
          }
          
          // Controlla gli interessi specifici (Arte e cultura, Gastronomia, Storia, ecc.)
          if (!matchesInterests && itinerary.interests && Array.isArray(itinerary.interests)) {
            matchesInterests = itinerary.interests.some(interest =>
              interest && interest.toLowerCase().includes(userInterests)
            );
          }
        }
        
        const isMatch = matchesDuration && matchesBudget && matchesInterests;
        
        // Debug individuale del filtraggio
        console.log(`Itinerario ${itinerary.id || 'senza id'}: ` +
                    `durata: match=${matchesDuration} (${itineraryDuration}/${itineraryDurationNum} vs ${userDuration}/${userDurationNum}), ` +
                    `budget: match=${matchesBudget} (${itinerary.budget} vs ${searchParams.budget}), ` + 
                    `interessi: match=${matchesInterests} (${itinerary.highlights} vs ${searchParams.interests}), ` +
                    `match complessivo: ${isMatch}`);
        
        return isMatch;
      });
  
      console.log('Filtered itineraries:', filteredItineraries);
      
      // Se non abbiamo trovato nulla con i filtri, forse sono troppo restrittivi
      // Proviamo un approccio più permissivo se non abbiamo risultati
      if (filteredItineraries.length === 0) {
        console.log('Nessun itinerario trovato con filtri rigorosi, provo filtri più permissivi');
        
        // Filtro più permissivo - basta che corrisponda a uno dei parametri
        filteredItineraries = allItineraries.filter(itinerary => {
          if (!itinerary) return false;
          
          const durMatch = !searchParams.duration || 
            String(itinerary.duration || '').includes(searchParams.duration.split(' ')[0]);
            
          const budMatch = !searchParams.budget;
          
          const intMatch = !searchParams.interests || (
            Array.isArray(itinerary.highlights) && itinerary.highlights.some(h => 
              h && h.toLowerCase().includes(searchParams.interests.toLowerCase())
            )
          );
          
          // Basta che corrisponda almeno un parametro
          return durMatch || budMatch || intMatch;
        });
        
        console.log('Risultati con filtri permissivi:', filteredItineraries.length);
      }
      
      // Se ancora non abbiamo risultati, mostriamo tutti gli itinerari
      if (filteredItineraries.length === 0) {
        console.log('Nessun itinerario trovato anche con filtri permissivi, mostro tutti');
        filteredItineraries = allItineraries;
      }
  
      setItineraries(filteredItineraries);
    } catch (error) {
      console.error('Error fetching itineraries:', error);
      setError('Failed to load itineraries: ' + (error.message || 'Unknown error'));
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [searchParams.duration, searchParams.budget, searchParams.interests]);
  // Fetch on mount with cleanup
  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      try {
        await fetchItineraries();
      } catch (e) {
        if (isMounted) {
          console.error("Unexpected error during fetch:", e);
          setLoading(false);
          setError("An unexpected error occurred. Please refresh the page.");
        }
      }
    };
    
    loadData();
    
    return () => {
      isMounted = false;
    };
  }, [fetchItineraries]);

  const handleSelectItinerary = (id) => {
    if (id) {
      navigate(`/itinerary/${id}`);
    } else {
      console.warn("Attempted to navigate to an itinerary with undefined id");
    }
  };
  
  const handleRefresh = () => {
    fetchItineraries();
  };
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Recommended Itineraries</h1>
        <div className="flex gap-2">
          <button
            onClick={handleRefresh}
            className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-300"
            aria-label="Refresh itineraries"
            disabled={loading}
          >
            <span>🔄</span>
          </button>
          <button
            onClick={() => setShowAIGenerator(!showAIGenerator)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 flex items-center"
            disabled={loading}
          >
            <span className="mr-2">✨</span>
            {showAIGenerator ? 'Hide AI' : 'Create with AI'}
          </button>
        </div>
      </div>
      
      {showAIGenerator && (
        <AIItineraryGenerator 
          preferences={searchParams}
          onGenerate={(newItinerary) => {
            if (newItinerary) {
              setItineraries(prev => [
                { ...newItinerary, isAIGenerated: true, id: `ai-${Date.now()}` },
                ...prev
              ]);
              setShowAIGenerator(false);
            }
          }}
          onError={(errorMsg) => {
            setError(errorMsg || "Failed to generate AI itinerary");
          }}
        />
      )}
      
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading itineraries...</p>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Search parameters:</p>
            <ul className="text-xs text-left inline-block">
              <li>Duration: {searchParams.duration || '(any)'}</li>
              <li>Budget: {searchParams.budget || '(any)'}</li>
              <li>Interests: {searchParams.interests || '(any)'}</li>
            </ul>
          </div>
          <button
            onClick={() => {
              setLoading(false);
              setError("Loading cancelled by user");
            }}
            className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel Loading
          </button>
        </div>
      )}
      
      {!loading && error && (
        <div className="text-center py-8">
          <p className="mb-4 text-red-600">{error}</p>
          <div className="flex justify-center gap-2">
            <button
              onClick={handleRefresh}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/itineraries')}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              View All Itineraries
            </button>
          </div>
        </div>
      )}
      
      {!loading && !error && itineraries.length === 0 && (
        <div className="text-center py-8">
          <p className="mb-4">No itineraries found matching your criteria.</p>
          <div className="my-4 p-4 bg-gray-100 rounded text-sm text-left inline-block">
            <p className="font-medium mb-1">Search criteria:</p>
            <ul>
              <li>Duration: {searchParams.duration || '(any)'}</li>
              <li>Budget: {searchParams.budget || '(any)'}</li>
              <li>Interests: {searchParams.interests || '(any)'}</li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Modify Search
            </button>
            <button
              onClick={() => navigate('/itineraries')}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              View All Itineraries
            </button>
          </div>
        </div>
      )}
      
      {!loading && !error && itineraries.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itineraries.map((itinerary, index) => (
            <ItineraryCard
              key={itinerary.id || `itinerary-${index}-${Date.now()}`}
              itinerary={itinerary}
              onSelect={() => handleSelectItinerary(itinerary.id)}
              isAIGenerated={itinerary.isAIGenerated}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItinerarySelectionPage;