import React, { useState } from 'react';

function CustomerProfile() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Appointment history');

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-200 w-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Navigation</h1>
          <button
            className={`block w-full py-2 px-4 rounded-md ${activeTab === 'Appointment history' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleTabClick('Appointment history')}
          >
            Appointment history
          </button>
          <button
            className={`block w-full py-2 px-4 rounded-md ${activeTab === 'Loyalty points' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleTabClick('Loyalty points')}
          >
            Loyalty points
          </button>
          <button
            className={`block w-full py-2 px-4 rounded-md ${activeTab === 'Accident Management' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleTabClick('Accident Management')}
          >
            Accident Management
          </button>
          <button
            className={`block w-full py-2 px-4 rounded-md ${activeTab === 'Service history' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleTabClick('Service history')}
          >
            Service history
          </button>
          <button
            className={`block w-full py-2 px-4 rounded-md ${activeTab === 'Settings' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => handleTabClick('Settings')}
          >
            Settings
          </button>
        </div>
        <div className="mt-20 p-4">
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600">
            Log Out
          </button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="bg-yellow-200 p-4 rounded-md h-1/3">
          <h1 className="text-2xl font-bold mb-4">Profile Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            {/* Rest of the content */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
