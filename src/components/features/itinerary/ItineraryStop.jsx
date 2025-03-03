import React, { useState } from 'react';
import { generateEnhancedStory } from '../../../services/aiService';

const ItineraryStop = ({ time, title, description, duration, tips, story, photoTip }) => {
  const [aiContent, setAiContent] = useState({
    tip: null,
    story: null,
    photo: null
  });
  const [loading, setLoading] = useState({
    tip: false,
    story: false,
    photo: false
  });

  const handleGenerateAIContent = async (type) => {
    setLoading(prev => ({ ...prev, [type]: true }));
    
    try {
      const content = await generateEnhancedStory(title, type);
      setAiContent(prev => ({ ...prev, [type]: content }));
    } catch (error) {
      console.error(`Error generating ${type} content:`, error);
    } finally {
      setLoading(prev => ({ ...prev, [type]: false }));
    }
  };

  return (
    <div className="border-l-4 border-blue-500 pl-4 pb-2">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-medium mb-2 md:mb-0 md:mr-4 inline-block">
          {time}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="md:ml-auto text-sm text-gray-500">Durata: {duration}</span>
      </div>
      
      <p className="mt-2 text-gray-700">{description}</p>
      
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
          <div className="flex justify-between items-center">
            <p className="text-xs font-semibold text-yellow-800 mb-1">SUGGERIMENTO PRATICO</p>
            <button 
              onClick={() => handleGenerateAIContent('tip')} 
              className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded hover:bg-yellow-200"
              disabled={loading.tip}
            >
              {loading.tip ? 'Generando...' : '✨ AI'}
            </button>
          </div>
          <p className="text-sm">{aiContent.tip || tips}</p>
        </div>
        
        <div className="bg-purple-50 p-3 rounded border border-purple-200">
          <div className="flex justify-between items-center">
            <p className="text-xs font-semibold text-purple-800 mb-1">STORIA & CURIOSITÀ</p>
            <button 
              onClick={() => handleGenerateAIContent('story')} 
              className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
              disabled={loading.story}
            >
              {loading.story ? 'Generando...' : '✨ AI'}
            </button>
          </div>
          <p className="text-sm">{aiContent.story || story}</p>
        </div>
        
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <div className="flex justify-between items-center">
            <p className="text-xs font-semibold text-green-800 mb-1">FOTO PERFETTA</p>
            <button 
              onClick={() => handleGenerateAIContent('photo')} 
              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200"
              disabled={loading.photo}
            >
              {loading.photo ? 'Generando...' : '✨ AI'}
            </button>
          </div>
          <p className="text-sm">{aiContent.photo || photoTip}</p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryStop;
