import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const generateStory = async (location, type = 'historical') => {
  try {
    let promptContent = "";
    
    switch(type) {
      case 'historical':
        promptContent = `Racconta una breve storia storica interessante (max 120 parole) su ${location} a Roma. Includi dettagli affascinanti e poco conosciuti.`;
        break;
      case 'cultural':
        promptContent = `Descrivi brevemente (max 120 parole) l'importanza culturale di ${location} a Roma. Concentrati su aspetti artistici o tradizionali interessanti.`;
        break;
      case 'photographic':
        promptContent = `Fornisci un suggerimento fotografico dettagliato (max 80 parole) per scattare la foto perfetta a ${location} a Roma. Includi dettagli su angolazione, orario migliore e composizione.`;
        break;
      default:
        promptContent = `Racconta un fatto interessante (max 120 parole) su ${location} a Roma.`;
    }
    
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Sei una guida turistica esperta con profonde conoscenze storiche e culturali di Roma."
          },
          {
            role: "user",
            content: promptContent
          }
        ],
        temperature: 0.7,
        max_tokens: 200
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
    console.error(`Error generating ${type} story:`, error);
    return `Informazioni su ${location} non disponibili al momento.`;
  }
};