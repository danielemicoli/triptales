import axios from 'axios';

// Sostituisci con la tua chiave API
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; 

export const generateEnhancedStory = async (location, type, customPrompt = null) => {
  try {
    // Se API_KEY non è configurata, usa contenuti statici dimostrativi
    if (!API_KEY) {
      console.warn('OpenAI API key not configured, using demo content');
      return getDemoContent(location, type);
    }
    
    const prompt = customPrompt || getPromptForType(location, type);
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Sei una guida turistica esperta con profonde conoscenze di storia, arte e cultura italiana."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating AI content:', error);
    return getDemoContent(location, type);
  }
};

// Crea prompt diversi in base al tipo di contenuto richiesto
function getPromptForType(location, type) {
  switch(type) {
    case 'story':
      return `Racconta una curiosità storica o culturale affascinante su "${location}" a Roma in massimo 80 parole. Sii specifico e rivela dettagli poco conosciuti.`;
    case 'tip':
      return `Fornisci un suggerimento pratico molto specifico per visitare "${location}" a Roma evitando code o problemi, in massimo 60 parole.`;
    case 'photo':
      return `Suggerisci il punto e il momento perfetto per scattare una foto indimenticabile a "${location}" a Roma. Max 60 parole.`;
    case 'nearby':
      return `Suggerisci un luogo interessante da visitare vicino a "${location}" che molti turisti non conoscono. Max 60 parole.`;
    case 'alternative':
      return `Suggerisci un'alternativa al coperto vicino a "${location}" in caso di pioggia. Max 60 parole.`;
    default:
      return `Racconta qualcosa di interessante su "${location}" a Roma in massimo 80 parole.`;
  }
}

// Contenuto di fallback/demo in caso di errori API
function getDemoContent(location, type) {
  const demoContent = {
    story: `${location} rappresenta uno dei luoghi più affascinanti di Roma, con una storia che risale all'epoca imperiale. Pochi sanno che nel sottosuolo si nascondono antiche strutture ancora inesplorate.`,
    tip: `Per ${location}, evita le lunghe code acquistando i biglietti online con almeno 3 giorni di anticipo e arrivando 20 minuti prima dell'apertura. L'ingresso laterale è spesso meno affollato.`,
    photo: `Il momento migliore per fotografare ${location} è durante l'ora d'oro, circa 30 minuti prima del tramonto. Posizionati sul lato est per catturare la luce che illumina la struttura creando contrasti suggestivi.`,
    nearby: `A soli 5 minuti a piedi da ${location} si trova un piccolo chiostro medievale raramente visitato dai turisti. Offre un'oasi di pace con affreschi ben conservati e una fontana antica.`,
    alternative: `In caso di pioggia, a 200 metri da ${location} si trova un museo sotterraneo che espone reperti archeologici dell'area. È completamente coperto e offre una prospettiva unica sulla storia del luogo.`
  };
  
  return demoContent[type] || demoContent.story;
}

// Genera un intero itinerario basato su preferenze
export const generateAIItinerary = async (preferences) => {
  const { city, duration, interests, budget } = preferences;
  
  try {
    // Se API_KEY non è configurata, usa un itinerario di esempio
    if (!API_KEY) {
      console.warn('OpenAI API key not configured, using demo itinerary');
      return getDemoItinerary(preferences);
    }
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "Sei un esperto di viaggi e turismo specializzato nella creazione di itinerari personalizzati."
          },
          {
            role: "user",
            content: `Crea un itinerario dettagliato per ${city} con le seguenti caratteristiche:
            - Durata: ${duration}
            - Interessi: ${interests}
            - Budget: ${budget}
            
            Formatta l'itinerario in JSON con questa struttura:
            {
              "title": "Titolo dell'itinerario",
              "description": "Breve descrizione",
              "duration": "Durata totale",
              "distance": "Distanza approssimativa",
              "difficulty": "Livello di difficoltà",
              "highlights": ["Punto 1", "Punto 2", "Punto 3"],
              "stops": [
                {
                  "time": "Orario",
                  "title": "Nome del luogo",
                  "description": "Descrizione",
                  "duration": "Tempo di visita",
                  "tips": "Suggerimento pratico",
                  "story": "Curiosità storica o culturale",
                  "photoTip": "Suggerimento fotografico"
                }
              ],
              "transportation": [
                {
                  "from": "Luogo di partenza",
                  "to": "Destinazione",
                  "method": "Metodo di trasporto",
                  "duration": "Tempo di percorrenza",
                  "details": "Dettagli utili"
                }
              ]
            }`
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const jsonString = response.data.choices[0].message.content;
    // Pulisci la risposta e convertila in JSON
    const cleanJson = jsonString.replace(/```json|```/g, '').trim();
    const parsedItinerary = JSON.parse(cleanJson);
    
    // Aggiungi proprietà necessarie
    return {
      ...parsedItinerary,
      id: 'ai-' + Date.now(),
      image: `https://source.unsplash.com/random/500x300/?${city},${interests.split(' ')[0]}`,
      isAIGenerated: true
    };
    
  } catch (error) {
    console.error('Error generating AI itinerary:', error);
    return getDemoItinerary(preferences);
  }
};

// Itinerario di demo per il fallback
function getDemoItinerary(preferences) {
  const { city, duration, interests, budget } = preferences;
  
  const durationHours = duration === 'Giornata intera' ? '8 ore' : 
                        duration === 'Mezza giornata' ? '4 ore' : '2 giorni';
  
  return {
    id: 'ai-' + Date.now(),
    title: `Esplorazione ${interests} di ${city}`,
    description: `Itinerario personalizzato per scoprire ${city} con focus su ${interests}, adatto a un budget ${budget.toLowerCase()}.`,
    duration: durationHours,
    distance: '5 km',
    difficulty: 'Media',
    highlights: [
      `Il meglio di ${interests} a ${city}`,
      'Attrazioni imperdibili',
      'Esperienze autentiche'
    ],
    image: `https://source.unsplash.com/random/500x300/?${city},${interests.split(' ')[0]}`,
    isAIGenerated: true,
    stops: [
      {
        time: '09:00',
        title: 'Punto di partenza',
        description: `Inizia la tua esplorazione di ${city} dal centro storico.`,
        duration: '1 ora',
        tips: 'Arriva presto per evitare la folla e goditi la città mentre si sveglia.',
        story: `${city} ha una ricca storia che risale a migliaia di anni fa, con influenze culturali che si stratificano nei secoli.`,
        photoTip: 'La luce mattutina offre ottime opportunità per foto panoramiche della città.'
      },
      {
        time: '10:30',
        title: 'Attrazioni principali',
        description: `Visita ai principali punti di interesse legati a ${interests}.`,
        duration: '2 ore',
        tips: 'Acquista i biglietti online in anticipo per saltare le code.',
        story: `Questa zona è particolarmente significativa per gli appassionati di ${interests} grazie alla sua storia unica.`,
        photoTip: 'Cerca angolazioni insolite per catturare dettagli che molti turisti ignorano.'
      },
      {
        time: '13:00',
        title: 'Pausa pranzo',
        description: 'Ristoro in un locale tipico della zona.',
        duration: '1 ora',
        tips: `Per un budget ${budget.toLowerCase()}, questo è un ottimo posto per assaggiare la cucina locale.`,
        story: 'La gastronomia locale ha radici profonde nella cultura del territorio.',
        photoTip: 'I piatti colorati offrono ottime opportunità fotografiche.'
      }
    ],
    transportation: [
      {
        from: 'Punto di partenza',
        to: 'Attrazioni principali',
        method: 'A piedi',
        duration: '20 minuti',
        details: 'Percorso scenico attraverso il centro storico.'
      },
      {
        from: 'Attrazioni principali',
        to: 'Pausa pranzo',
        method: 'Trasporto pubblico',
        duration: '10 minuti',
        details: 'Autobus n.10, fermata centrale.'
      }
    ],
    weather: {
      condition: 'Soleggiato',
      temperature: 24,
      icon: '☀️'
    }
  };
}