import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Pagina non trovata</p>
      <p className="mb-8">La pagina che stai cercando non esiste o è stata spostata.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Torna alla Home
      </Link>
    </div>
  );
};

export default NotFoundPage;