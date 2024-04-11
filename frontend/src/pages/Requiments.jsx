import React, { useEffect, useState } from 'react';
import Customerdashboard from '../components/Customerdashboard';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHandPointer } from 'react-icons/fa';

export default function Requiments() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { email } = useParams();

  const [formData, setFormData] = useState({
    _id: '',
    email: '',
    vehiclenumber: '',
    engine: '',
    tyre: '',
    parts: '',
    date: '',
    vehicle: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/backend/issues/customerview/${currentUser.email}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (currentUser.email) {
      fetchUserData();
    }
  }, [currentUser.email]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5173/backend/issues/updateIssue/${formData._id}`, formData);
      console.log(res.data);
      navigate('/customerview');
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  };

  return (
    <div style={{ display: 'flex', padding: '0px' }}>
      <div style={{ width: '250px', background: 'black', padding: '0px' }}>
        <Customerdashboard />
      </div>
      <div className='mx-auto'>
        <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Approvel</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>

        <label className='text-black font-semibold'>Check Engine</label>
        <label className='text-black font-semibold'>Add tyre</label>
        <label className='text-black font-semibold'>{'Add '+formData.parts}</label>

<p className='text-green-700 font-semibold'>You can type your choices or take our requirments.
        <div className=' text-yellow-500'><FaHandPointer/></div></p>
          <input
            onChange={handleChange}
            className='border p-3 rounded-lg bg-slate-900 text-white'
            type='text'
            id='requirment' 
            placeholder='Add Additional'
            value={formData.requirment} 
          />

          <button
            type='submit'
            className='bg-gradient-to-r from-purple-600 to-blue-600 text-white border-black rounded-lg p-3 uppercase text-sm font-bold hover:opacity-90 disabled:opacity-80'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
