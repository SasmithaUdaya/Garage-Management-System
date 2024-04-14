import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-8"> {/* Adjust mt-8 as needed for spacing */}
        <div>
          <Link to="/create-service">
            <button className="bg-slate-700 text-white rounded-lg p-3  hover:opacity-95 disabled:opacity-80 mr-4">
              Create Service
            </button>
          </Link>
          <Link to="/create-package">
            <button className="bg-slate-700 text-white rounded-lg p-3  hover:opacity-95 disabled:opacity-80">
              Create Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
