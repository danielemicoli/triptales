import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-6 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🧭</span>
              <span className="font-bold text-xl">TripTales</span>
            </div>
            <p className="text-gray-600 mt-1">Scopri la città a modo tuo</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold mb-2">Chi siamo</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Il nostro team</li>
                <li>Contatti</li>
                <li>Lavora con noi</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Legali</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Privacy Policy</li>
                <li>Termini di servizio</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-gray-500">
          <p>© {new Date().getFullYear()} TripTales. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;