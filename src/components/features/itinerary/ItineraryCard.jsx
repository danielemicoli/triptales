import { useState } from "react";

const ITINERARY_SPECIFIC_IMAGES = {
  "roma-storica": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80",
  "roma-arte": "https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "roma-gastronomia": "https://images.unsplash.com/photo-1525031761408-e4c9d0bbed6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "roma-misteriosa": "https://images.unsplash.com/photo-1555992828-45e2c432bf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "roma-verde": "https://images.unsplash.com/photo-1570843916042-e8e9cad1c05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "roma-gladiatori": "https://images.unsplash.com/photo-1612613900942-c5343831900d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "roma-papale": "https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  "roma-sotterranea": "https://images.unsplash.com/photo-1590658499337-252001c9e01d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
};

// Immagini di backup per categorie di itinerari
const BACKUP_IMAGES = {
  "arte": "https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "cultura": "https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "storica": "https://images.unsplash.com/photo-1518189841756-dc6ee7f02925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "misteriosa": "https://images.unsplash.com/photo-1593778599331-8ceebe9e6471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "gastronomia": "https://images.unsplash.com/photo-1516900448138-898720b586d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "verde": "https://images.unsplash.com/photo-1464539310196-1e4cd2c510d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "default": "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
};

const ItineraryCard = ({ itinerary, onSelect, isAIGenerated = false }) => {
  const [imageError, setImageError] = useState(false);
  
  // Seleziona l'immagine di backup appropriata in base al titolo o alla descrizione
  const getBackupImage = () => {
    // Primo check: vedi se abbiamo un'immagine specifica per questo ID di itinerario
    if (itinerary.id && ITINERARY_SPECIFIC_IMAGES[itinerary.id]) {
      return ITINERARY_SPECIFIC_IMAGES[itinerary.id];
    }
    
    const content = (itinerary.title + ' ' + itinerary.description).toLowerCase();
    
    if (content.includes('arte') || content.includes('artistico') || content.includes('museo')) return BACKUP_IMAGES.arte;
    if (content.includes('storica') || content.includes('storia') || content.includes('colosseo')) return BACKUP_IMAGES.storica;
    if (content.includes('misteriosa') || content.includes('misteri') || content.includes('oscuri')) return BACKUP_IMAGES.misteriosa;
    if (content.includes('gastronomia') || content.includes('cibo') || content.includes('sapori')) return BACKUP_IMAGES.gastronomia;
    if (content.includes('verde') || content.includes('parco') || content.includes('giardini')) return BACKUP_IMAGES.verde;
    if (content.includes('cultura')) return BACKUP_IMAGES.cultura;
    
    // Cerca nelle evidenziazioni
    if (itinerary.highlights && Array.isArray(itinerary.highlights)) {
      const highlights = itinerary.highlights.join(' ').toLowerCase();
      if (highlights.includes('arte')) return BACKUP_IMAGES.arte;
      if (highlights.includes('storia')) return BACKUP_IMAGES.storica;
      if (highlights.includes('cibo') || highlights.includes('gastro')) return BACKUP_IMAGES.gastronomia;
      if (highlights.includes('natura') || highlights.includes('parco')) return BACKUP_IMAGES.verde;
    }
    
    return BACKUP_IMAGES.default;
  };
  
  // Formatta la durata in modo leggibile
  const formatDuration = (duration) => {
    if (!duration) return 'Non specificata';
    
    // Se è già una stringa formattata (es. "8 ore"), restituiscila
    if (typeof duration === 'string' && duration.includes(' ')) {
      return duration;
    }
    
    // Converte numeri in stringhe leggibili
    const hours = parseInt(duration, 10);
    if (!isNaN(hours)) {
      if (hours < 24) {
        return `${hours} ${hours === 1 ? 'ora' : 'ore'}`;
      } else if (hours === 24) {
        return '1 giorno';
      } else if (hours % 24 === 0) {
        return `${hours / 24} giorni`;
      } else {
        const days = Math.floor(hours / 24);
        const remainingHours = hours % 24;
        return `${days} ${days === 1 ? 'giorno' : 'giorni'} e ${remainingHours} ${remainingHours === 1 ? 'ora' : 'ore'}`;
      }
    }
    
    return String(duration);
  };
  
  // Manipola l'URL dell'immagine per evitare problemi con source.unsplash.com
  const getImageUrl = () => {
    // Primo controllo: verifica se l'itinerario ha un ID specifico con un'immagine dedicata
    if (itinerary.id && ITINERARY_SPECIFIC_IMAGES[itinerary.id]) {
      return ITINERARY_SPECIFIC_IMAGES[itinerary.id];
    }
    
    // Se c'è stato un errore o non c'è un'immagine, usa il sistema di backup
    if (imageError || !itinerary.image) {
      return getBackupImage();
    }
    
    // Se l'URL contiene random, sostituiscilo con un'immagine fissa
    if (itinerary.image.includes('source.unsplash.com/random')) {
      // Estrai i termini di ricerca
      const searchPart = itinerary.image.split('?')[1];
      if (searchPart && searchPart.includes('rome,')) {
        const secondTerm = searchPart.split(',')[1];
        if (secondTerm === 'food') return BACKUP_IMAGES.gastronomia;
        if (secondTerm === 'art') return BACKUP_IMAGES.arte;
        if (secondTerm === 'mystery') return BACKUP_IMAGES.misteriosa;
        if (secondTerm === 'park') return BACKUP_IMAGES.verde;
        if (secondTerm === 'colosseum') return BACKUP_IMAGES.storica;
        if (secondTerm === 'gladiator') return ITINERARY_SPECIFIC_IMAGES["roma-gladiatori"];
        if (secondTerm === 'dark') return BACKUP_IMAGES.misteriosa;
        if (secondTerm === 'underground') return ITINERARY_SPECIFIC_IMAGES["roma-sotterranea"];
      }
      return getBackupImage();
    }
    
    // Altrimenti usa l'immagine originale
    return itinerary.image;
  };
  
  // Ottieni l'URL finale dell'immagine
  const imageUrl = getImageUrl();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={itinerary.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImageError(true)}
        />
        
        {/* Badge per itinerari generati da AI */}
        {isAIGenerated && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
            <span className="mr-1">✨</span>
            Generato con AI
          </div>
        )}
        
        {/* Badge per durata */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
          {formatDuration(itinerary.duration)}
        </div>
        
        {/* Badge per difficoltà */}
        {itinerary.difficulty && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
            {itinerary.difficulty}
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{itinerary.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{itinerary.description}</p>
        
        {/* Tags per highlights */}
        {itinerary.highlights && itinerary.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {itinerary.highlights.slice(0, 3).map((highlight, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {highlight}
              </span>
            ))}
            {itinerary.highlights.length > 3 && (
              <span className="text-xs text-gray-500 px-1 flex items-center">
                +{itinerary.highlights.length - 3}
              </span>
            )}
          </div>
        )}
        
        {/* Informazioni aggiuntive */}
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <span className="mr-1">🚶</span>
            <span>{itinerary.distance || 'N/D'}</span>
          </div>
          
          {itinerary.meals && itinerary.meals.length > 0 && (
            <div className="flex items-center">
              <span className="mr-1">🍽️</span>
              <span>{itinerary.meals.length} {itinerary.meals.length === 1 ? 'pasto' : 'pasti'}</span>
            </div>
          )}
          
          {itinerary.weather && (
            <div className="flex items-center">
              <span className="mr-1">{itinerary.weather.icon || '☀️'}</span>
              <span>{itinerary.weather.temperature}°C</span>
            </div>
          )}
        </div>
        
        <button
          onClick={() => onSelect(itinerary.id)}
          className={`w-full py-2 px-4 rounded text-white transition-colors ${
            isAIGenerated 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Visualizza Itinerario
        </button>
      </div>
    </div>
  );
};

export default ItineraryCard;