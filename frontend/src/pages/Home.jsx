import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
