import React from 'react';
import { Link } from 'react-router-dom';

export default function Ordersystem() {
  return (
    <div>
      
    <div className="flex justify-center mt-10">
      
      <Link to="/pendingorders">
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg mr-4">Pending Orders</button>
      </Link>
      <Link to="/acceptedorders">
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg mr-4">Accepted Orders</button>
      </Link>
      <Link to="/addnewitemorder">
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg">Create Order</button>
      </Link>
    </div>
    </div>
  );
}
