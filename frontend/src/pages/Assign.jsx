import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Assign() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.contact)) {
      alert('Invalid mobile number. Please enter a 10-digit mobile number.');
      return;
    }
    try {
      const res = await axios.post(`http://localhost:5173/backend/accident/create`, formData);
      console.log(res.data);
      alert('Successfully assigned the mechanic !'); // Alert message
      navigate('/viewacc');
    } catch (error) {
      console.error('Error Accident Assigning issue:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-200 to-blue-400 flex items-center justify-center h-screen">
      <div className="border border-gray-300 p-8 rounded-lg bg-black">
        <h1 className="text-3xl text-center font-bold my-5 text-yellow-500">Assign mechanics for accidents!</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleChange}
            type="text"
            placeholder="MechanicName"
            id="macName"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <input
            onChange={handleChange}
            type="text"
            placeholder="Location"
            id="location"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <input
            onChange={handleChange}
            type="date"
            id="date"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <input
            onChange={handleChange}
            type="text"
            placeholder="CustomerMobile"
            id="contact"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <input
            onChange={handleChange}
            type="text"
            placeholder="Vehicle Number"
            id="vehicleNumber"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <input
            onChange={handleChange}
            type="text"
            placeholder="MacId"
            id="mechanicId"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <input
            onChange={handleChange}
            type="text"
            placeholder="CorId"
            id="coordinatorId"
            className="border p-3 rounded-lg bg-gray-200 text-gray-800"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
