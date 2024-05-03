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
    try {
      
 
      const res = await axios.post(`http://localhost:5173/backend/accident/create`, formData);
      console.log(res.data);
      navigate('/viewacc');
    } catch (error) {
      console.error('Error Accident Assigning issue:', error);
    }
  };
  return (
    <div>


<div >
      <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Assign mechanics for accidents !</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

  <input onChange={handleChange} type='text' placeholder='MechanicName' id='macName' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='Location' id='location' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='date' id='date' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='CustomerMobile' id='contact' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='Vehicle Number' id='vehicleNumber' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />


  <input onChange={handleChange} type='text' placeholder='MacId' id='mechanicId' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='CorId' id='coordinatorId' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <button type='submit' className='bg-gradient-to-r from-purple-600 to-blue-600 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80'>
    Submit
  </button>

</form>

        
      

        
    </div>
    </div>
  )
}
