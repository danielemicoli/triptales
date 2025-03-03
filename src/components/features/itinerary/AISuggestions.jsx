import React, { useState, useEffect } from 'react';
import { generateEnhancedStory } from '../../../services/aiService';

const AISuggestions = ({ location, weather, time }) => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState({
    alternative: null,
    nearby: null,
    weather: null
  });

  useEffect(() => {
    if (!location) return;
    
    const loadSuggestions = async () => {
      setLoading(true);
      
      try {
        // Ottieni suggerimenti basati sul meteo
        if (weather === 'Pioggia' || weather === 'Temporale') {
          const weatherSuggestion = await generateEnhancedStory(
            location,
            'alternative',
            `Dato che a ${location} sta piovendo, suggerisci un'alternativa al coperto nelle vicinanze.`
          );
          setSuggestions(prev => ({ ...prev, weather: weatherSuggestion }));
        }
        
        // Suggerimento per luoghi vicini da visitare
        const nearbySuggestion = await generateEnhancedStory(
          location,
          'nearby',
          `Suggerisci un luogo interessante da visitare vicino a ${location} che molti turisti non conoscono.`
        );
        setSuggestions(prev => ({ ...prev, nearby: nearbySuggestion }));
        
      } catch (error) {
        console.error('Error loading AI suggestions:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadSuggestions();
  }, [location, weather]);

  if (loading) {
    return (
      <div className="bg-blue-50 p-4 rounded-lg mt-4 animate-pulse">
        <p className="text-center">L'AI sta generando suggerimenti intelligenti...</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <h3 className="font-semibold mb-2 flex items-center">
        <span className="mr-2">✨</span>
        Suggerimenti intelligenti
      </h3>
      
      {suggestions.weather && (
        <div className="mb-3 p-3 bg-white rounded">
          <p className="text-sm font-semibold text-orange-600">Alternativa per il maltempo:</p>
          <p className="text-sm">{suggestions.weather}</p>
        </div>
      )}
      
      {suggestions.nearby && (
        <div className="p-3 bg-white rounded">
          <p className="text-sm font-semibold text-blue-600">Scopri nei dintorni:</p>
          <p className="text-sm">{suggestions.nearby}</p>
        </div>
      )}
    </div>
  );
};

export default AISuggestions;