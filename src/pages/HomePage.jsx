import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../components/common/FeatureCard';

const HomePage = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    duration: 'Giornata intera (8 ore)',
    budget: 'Medio',
    interests: 'Arte e cultura'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCreateItinerary = () => {
    const queryParams = new URLSearchParams({
      duration: preferences.duration,
      budget: preferences.budget,
      interests: preferences.interests
    }).toString();    
    navigate(`/itineraries?${queryParams}`);
    navigate(`/itineraries?duration=${encodeURIComponent(preferences.duration)}&budget=${encodeURIComponent(preferences.budget)}&interests=${encodeURIComponent(preferences.interests)}`);
  };
  
  return (
    <div className="flex flex-col items-center p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Scopri la città a modo tuo</h1>
      <p className="text-lg mb-6 text-center">Itinerari personalizzati basati sui tuoi interessi, tempo e budget</p>
      
      <div className="w-full bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Crea il tuo itinerario</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Durata</label>
            <select 
              name="duration"
              value={preferences.duration}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option>Mezza giornata (4 ore)</option>
              <option>Giornata intera (8 ore)</option>
              <option>Weekend (2 giorni)</option>
              <option>Vacanza (3-7 giorni)</option>
            </select>
          </div>
          
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Budget</label>
            <select 
              name="budget"
              value={preferences.budget}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option>Economico</option>
              <option>Medio</option>
              <option>Premium</option>
            </select>
          </div>
          
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Interessi</label>
            <select 
              name="interests"
              value={preferences.interests}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option>Arte e cultura</option>
              <option>Gastronomia</option>
              <option>Storia</option>
              <option>Natura e paesaggi</option>
            </select>
          </div>
        </div>
        
        <button 
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          onClick={handleCreateItinerary}
        >
          Crea Itinerario
        </button>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Itinerari Personalizzati" 
          description="Percorsi ottimizzati in base ai tuoi interessi e tempo disponibile"
          icon="🗺️"
        />
        <FeatureCard 
          title="Storytelling Intelligente" 
          description="Scopri storie affascinanti e curiosità sui luoghi che visiti"
          icon="📚"
        />
        <FeatureCard 
          title="Ottimizzazione Pratica" 
          description="Evita code, gestisci orari e adattati alle condizioni meteo"
          icon="⏱️"
        />
      </div>
    </div>
  );
};

export default HomePage;