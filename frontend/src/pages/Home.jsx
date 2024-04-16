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
            Create Listing
          </button>
        </Link>
        
        <Link to="/show-service">
          <button className="bg-slate-700 text-white rounded-lg px-6 py-3 mr-4 hover:bg-opacity-90 focus:outline-none">
            Show Listings
          </button>
        </Link>

      </div>
    </div>
  );
}
