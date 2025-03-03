import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItineraryStop from '../components/features/itinerary/ItineraryStop';
import TransportOption from '../components/features/itinerary/TransportOption';
import AISuggestions from '../components/features/itinerary/AISuggestions';
import { getItineraryById } from '../services/api/itineraryService';

const ItineraryDetailPage = () => {
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchItinerary = async () => {
      setLoading(true);
      try {
        const data = await getItineraryById(id);
        setItinerary(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching itinerary:', error);
        setError('Itinerario non trovato o errore di caricamento');
      } finally {
        setLoading(false);
      }
    };
    
    fetchItinerary();
  }, [id]);
  
  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <p className="text-lg">Caricamento itinerario in corso...</p>
      </div>
    );
  }
  
  if (error || !itinerary) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <p className="text-lg text-red-600">{error || 'Itinerario non trovato'}</p>
      </div>
    );
  }
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{itinerary.title}</h1>
      <p className="text-gray-600 mb-6">{itinerary.description}</p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-2/3">
          <img 
            src={itinerary.mapImage || `https://source.unsplash.com/random/800x400/?map,${itinerary.title}`}
            alt="Mappa itinerario" 
            className="w-full rounded-lg shadow-md" 
          />
        </div>
        <div className="md:w-1/3 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dettagli Itinerario</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Durata:</span> <span className="font-medium">{itinerary.duration}</span></li>
            <li className="flex justify-between"><span>Distanza:</span> <span className="font-medium">{itinerary.distance}</span></li>
            <li className="flex justify-between"><span>Difficoltà:</span> <span className="font-medium">{itinerary.difficulty}</span></li>
            <li className="flex justify-between">
              <span>Pasti inclusi:</span> 
              <span className="font-medium">{(itinerary.meals || []).join(', ')}</span>
            </li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">Meteo Previsto</h3>
          <div className="flex items-center">
            <span className="text-3xl mr-2">{itinerary.weather?.icon || '☀️'}</span>
            <div>
              <p className="font-medium">{itinerary.weather?.condition || 'Soleggiato'}</p>
              <p className="text-sm text-gray-600">{itinerary.weather?.temperature || '26'}°C</p>
            </div>
          </div>
          
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Scarica Itinerario
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tappe dell'Itinerario</h2>
        <div className="space-y-6">
          {itinerary.stops.map((stop, index) => (
            <ItineraryStop 
              key={index}
              time={stop.time}
              title={stop.title}
              description={stop.description}
              duration={stop.duration}
              tips={stop.tips}
              story={stop.story}
              photoTip={stop.photoTip}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Trasporti Consigliati</h2>
        <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
          {itinerary.transportation.map((transport, index) => (
            <TransportOption 
              key={index}
              from={transport.from}
              to={transport.to}
              method={transport.method}
              duration={transport.duration}
              details={transport.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetailPage;