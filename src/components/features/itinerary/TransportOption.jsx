import React from 'react';

const TransportOption = ({ from, to, method, duration, details }) => {
  return (
    <div className="flex items-center border-b border-gray-200 pb-3">
      <div className="flex-shrink-0 mr-3">
        {method.includes("piedi") ? (
          <span className="text-2xl">🚶</span>
        ) : method.includes("Autobus") ? (
          <span className="text-2xl">🚌</span>
        ) : method.includes("Metro") ? (
          <span className="text-2xl">🚇</span>
        ) : (
          <span className="text-2xl">🚕</span>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between mb-1">
          <span className="font-medium">Da {from} a {to}</span>
          <span className="text-gray-600 text-sm">{duration}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-700">{method}</span>
          <span className="text-sm text-blue-600 cursor-pointer hover:underline">Mappa</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{details}</p>
      </div>
    </div>
  );
};

export default TransportOption;