import React from 'react';
import { FaShare } from 'react-icons/fa'; // Import icons from React Icons library

export default function AgentCard({ agentData }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden mr-4 max-w-xl mb-4"> {/* Main container with margin-bottom */}
      <div className="p-4"> {/* Padding */}
        <div className="flex items-center justify-between"> {/* Flex container */}
          <div className="flex items-center"> {/* Flex container */}
            <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">{agentData.initials}</div> {/* Initials circle */}
            <div className="ml-2"> {/* Margin left */}
              <h2 className="text-lg font-semibold">{agentData.name}</h2> {/* Name */}
              <p className="text-sm text-gray-500">{agentData.date}</p> {/* Date */}
            </div>
          </div>
          <button className="p-2">
            {/* Settings icon */}
          </button>
        </div>
        <img className="w-full" src={agentData.image} alt={agentData.name} /> {/* Image */}
        <div className="px-4 py-2"> {/* Padding */}
          <p className="text-sm text-gray-700">
            {agentData.description}
          </p> {/* Description */}
        </div>
        <div className="px-4 py-2 flex justify-end"> {/* Padding and flex container */}
          <button className="p-2">
            <FaShare /> {/* Share icon */}
          </button>
        </div>
      </div>
    </div>
  );
}
