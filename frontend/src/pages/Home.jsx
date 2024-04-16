import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div className="relative">
        <Link to="/create-service">
          <button className="bg-slate-700 text-white rounded-lg px-6 py-3 mr-4 hover:bg-opacity-90 focus:outline-none">
            Create Service
          </button>
        </Link>
        <Link to="/create-package">
          <button className="bg-slate-700 text-white rounded-lg px-6 py-3 mr-4 hover:bg-opacity-90 focus:outline-none">
            Create Package
          </button>
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className="bg-slate-700 text-white rounded-lg px-6 py-3 mr-4 hover:bg-opacity-90 focus:outline-none"
          >
            Show Listings
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200 divide-y divide-gray-200">
              <Link to="/show-service">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
                  Standalone Service
                </button>
              </Link>
              <Link to="/show-package">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
                  Service Package
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
