import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    if (!mobileRegex.test(formData.mobile)) {
      alert('Invalid mobile number. Please enter a 10-digit mobile number.');
      return;
    }
    try {
      const res = await axios.post(`http://localhost:5173/backend/accidentrequest/create`, formData);
      console.log(res.data);
      alert('Accident request submitted successfully');
      navigate('/createacc');
    } catch (error) {
      console.error('Error Accident Request issue:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-200 to-blue-400 flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-black rounded-lg shadow-md border border-gray-300">
        <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Post an accident request here!</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          
          <input 
            onChange={handleChange} 
            type='text' 
            placeholder='Name' 
            id='cusName' 
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500' 
          />
          <input 
            onChange={handleChange} 
            type='text' 
            placeholder='Location' 
            id='location' 
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500' 
          />
          <input 
            onChange={handleChange} 
            type='date' 
            id='date' 
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500' 
          />
          <input 
            onChange={handleChange} 
            type='text' 
            placeholder='Contact' 
            id='mobile' 
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500' 
          />
          <input 
            onChange={handleChange} 
            type='text' 
            placeholder='VehicleNumber' 
            id='vehicleNo' 
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500' 
          />
          <button 
            type='submit' 
            className='bg-gradient-to-r from-yellow-400 to-blue-500 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
