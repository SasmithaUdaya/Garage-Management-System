import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerProfile() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Appointment history');
  // State to store loyalty points count
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    // Fetch the count of true appointments for customer ID 1378651
    axios.get("http://localhost:3000/customerprofile/1378651")
      .then(response => {
        setLoyaltyPoints(response.data.count);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
          {/* Add other navigation buttons */}
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
          {/* Profile content */}
        </div>
      </div>
      {/* Second container */}
      <div className="flex-1 p-4">
        <div className="bg-yellow-200 p-4 rounded-md h-1/3">
          <h1 className="text-2xl font-bold mb-4">Loyalty Point</h1>
          {/* Display loyalty points count */}
          <p className="text-9xl text-red-500">{loyaltyPoints}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
