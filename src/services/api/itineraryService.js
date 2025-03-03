import { itineraries } from '../../data/itineraries';

// Aggiunta console.log per debug
console.log("Caricando itineraries.js, trovati:", itineraries.length, "itinerari");

// Simula una chiamata API asincrona
export const getItineraries = () => {
  return new Promise((resolve) => {
    console.log("getItineraries chiamato, restituirà:", itineraries.length, "itinerari");
    setTimeout(() => {
      resolve(itineraries);
    }, 300); // simula un leggero ritardo di rete
  });
};

export const getItineraryById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getItineraryById chiamato per id:", id);
      console.log("Itinerari disponibili con IDs:", itineraries.map(i => i.id));
      const itinerary = itineraries.find(item => item.id === id);
      if (itinerary) {
        resolve(itinerary);
      } else {
        reject(new Error(`Itinerary not found with id: ${id}`));
      }
    }, 300);
  });
};

export const searchItineraries = (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = itineraries.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      resolve(results);
    }, 300);
  });
};

export const getItinerariesByInterests = (interests) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = itineraries.filter(item => 
        interests.some(interest => 
          item.highlights.some(highlight => 
            highlight.toLowerCase().includes(interest.toLowerCase())
          )
        )
      );
      resolve(results);
    }, 300);
  });
};