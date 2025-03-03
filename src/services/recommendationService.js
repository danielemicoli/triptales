export const getPersonalizedRecommendations = (userPreferences, previouslyViewed, allItineraries) => {
    // Punteggi ponderati per ogni interesse dell'utente
    const interestWeights = {
      'Arte': 0.8,
      'Storia': 0.7,
      'Gastronomia': 0.6,
      'Natura': 0.5
    };
    
    // Calcola un punteggio per ogni itinerario
    const scoredItineraries = allItineraries.map(itinerary => {
      let score = 0;
      
      // Bonus se corrisponde agli interessi dell'utente
      userPreferences.interests.forEach(interest => {
        const key = Object.keys(interestWeights).find(k => interest.includes(k));
        if (key && itinerary.highlights.some(h => h.includes(key))) {
          score += interestWeights[key];
        }
      });
      
      // Bonus per durata corrispondente
      if (itinerary.duration.includes(userPreferences.duration.split(' ')[0])) {
        score += 0.5;
      }
      
      // Penalità per itinerari già visti (ma non escluderli completamente)
      if (previouslyViewed.includes(itinerary.id)) {
        score -= 0.3;
      }
      
      return {
        ...itinerary,
        score
      };
    });
    
    // Ordina per punteggio e prendi i migliori
    return scoredItineraries
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };