import React, { useState } from 'react';
import { generateAIItinerary } from '../../../services/aiService';

const AIItineraryGenerator = ({ onGenerate }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    city: 'Roma',
    interests: 'Arte e cultura',
    duration: 'Giornata intera',
    budget: 'Medio'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Chiamata al servizio AI
      const aiItinerary = await generateAIItinerary(formData);
      onGenerate(aiItinerary);
    } catch (error) {
      console.error('Error generating AI itinerary:', error);
      
      // In caso di errore, usa un itinerario mockup
      const mockAiItinerary = {
        id: 'ai-' + Date.now(),
        title: `Itinerario AI: ${formData.interests} a ${formData.city}`,
        description: `Itinerario personalizzato generato con AI per esplorare ${formData.city} con focus su ${formData.interests}.`,
        duration: formData.duration === 'Giornata intera' ? '8 ore' : '4 ore',
        difficulty: 'Media',
        highlights: ['Generato con AI', 'Personalizzato', 'Unico'],
        image: 'https://source.unsplash.com/random/500x300/?rome,ai',
        isAIGenerated: true,
        stops: [
          {
            time: '09:00',
            title: 'Punto di partenza AI',
            description: 'Inizio del percorso generato con AI',
            duration: '1 ora',
            tips: 'Questo è un itinerario di esempio. In un implementazione reale, questo sarebbe generato dall AI.',
            story: 'La tecnologia AI sta trasformando il modo in cui viaggiamo e scopriamo nuovi luoghi.',
            photoTip: 'Fotografia il tuo viaggio per creare ricordi indimenticabili.'
          }
        ],
        transportation: [
          {
            from: 'Punto A',
            to: 'Punto B',
            method: 'A piedi',
            duration: '15 minuti',
            details: 'Percorso generato con AI'
          }
        ]
      };
      
      onGenerate(mockAiItinerary);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <span className="mr-2 text-2xl">✨</span>
        Genera un itinerario personalizzato con AI
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Città</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Interessi</label>
            <select
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Arte e cultura</option>
              <option>Storia antica</option>
              <option>Gastronomia</option>
              <option>Architettura</option>
              <option>Vita notturna</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Durata</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Mezza giornata</option>
              <option>Giornata intera</option>
              <option>Weekend</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Economico</option>
              <option>Medio</option>
              <option>Premium</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generando itinerario...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <span className="mr-2">✨</span>
              Genera con AI
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default AIItineraryGenerator;
