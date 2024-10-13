import React from 'react';

const TransportDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Transport Dashboard
        </h2>
        <p className="text-gray-600 text-center">
          Welcome to the Transport Dashboard! Here, you can manage your transport services and view deliveries.
        </p>
      </div>
    </div>
  );
};

export default TransportDashboard;
