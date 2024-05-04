import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ChangeAssignment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    macName: '',
    location: '',
    contact: '',
    date: '',
    mechanicId: '',
    coordinatorId: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5173/backend/accident/oneAccident/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(formData.contact)) {
      alert('Invalid contact number. Please enter a 10-digit mobile number.');
      return;
    }
    try {
      await axios.put(`/backend/accident/updateAccident/${id}`, formData);
      alert('Accident assignment updated successfully');
      navigate('/viewacc');
    } catch (err) {
      console.error(err);
      alert('Error updating Accident');
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-200 to-blue-400 flex justify-center items-center min-h-screen">
      <div className="max-w-xl w-full p-6 bg-black rounded-lg shadow-md border border-gray-300">
        <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Update the assignment here</h1>
        <form onSubmit={handleEdit} className='flex flex-col gap-4'>

          <label htmlFor="macName" className="text-white">Customer Name</label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Name'
            id='macName'
            value={formData.macName}
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500'
          />

          <label htmlFor="location" className="text-white">Location</label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Location'
            id='location'
            value={formData.location}
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500'
          />

          <label htmlFor="contact" className="text-white">Customer Mobile</label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Mobile'
            value={formData.contact}
            id='contact'
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500'
          />

          <label htmlFor="mechanicId" className="text-white">Mechanic Id</label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='MacId'
            id='mechanicId'
            value={formData.mechanicId}
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500'
          />

          <label htmlFor="coordinatorId" className="text-white">Coordinator Id</label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='CorId'
            id='coordinatorId'
            value={formData.coordinatorId}
            className='border p-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500'
          />

          <button
            type='submit'
            className='bg-gradient-to-r from-yellow-400 to-blue-500 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80 self-center'
          >
            Update
          </button>

        </form>
      </div>
    </div>
  );
}
