import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl mr-2">🧭</span>
          <span className="font-bold text-xl">TripTales</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/itineraries" className="text-gray-700 hover:text-blue-600">Destinazioni</Link>
          <Link to="/experiences" className="text-gray-700 hover:text-blue-600">Esperienze</Link>
          <Link to="/community" className="text-gray-700 hover:text-blue-600">Community</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <button className="hidden md:block border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">
            Accedi
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Registrati
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;