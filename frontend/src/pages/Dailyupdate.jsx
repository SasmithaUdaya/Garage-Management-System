import React, { useEffect, useState } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Dailyupdate() {
  const navigate = useNavigate();
  

  const { id } = useParams();
  const [formData, setFormData] = useState({
    email: '',
    vehiclenumber: '',
    details: '',
    date: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5173/backend/daily/onestatus/${id}`)
    .then((res) => {
       setFormData(res.data);
    })
    .catch((error) => {
        console.log(error);
    })

} , [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {

      await axios.put(`/backend/daily/updateStatus/${id}`, formData);
      await axios.post('http://localhost:5173/backend/statushistory/createStatushistory', formData);
      alert('Status update succesfully');
      navigate('/allstatus');

    } catch (err) {
      console.error(err);
      alert('Error update daily status');
    }
  };



  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  
  return (
    <div style={{ display: 'flex', padding: '0px' }}>
      <div style={{ width: '250px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='mx-auto'>
        <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Update Daily Status</h1>

        <form onSubmit={handleEdit} className='flex flex-col gap-4 p-5'>
          <input onChange={handleChange} type='email' placeholder='Email' id='email' value={formData.email} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' disabled />

          <input onChange={handleChange} type='text' id='vehiclenumber' value={formData.vehiclenumber} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' disabled />

          <input onChange={handleChange} type='text' id='date' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' value={getCurrentDate()} disabled />

          <input onChange={handleChange}  id='details' value={formData.details} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />
          
            <button type='submit' className='bg-gradient-to-r from-purple-600 to-blue-600 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80'>
              Update
            </button>
        
        </form>

       <div >
        <form  className='flex flex-col gap-4 p-5'>

            <input type='email'   placeholder='email' id='email' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

            <input type='text' placeholder='subject' id='subject' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

            <input type='text'  placeholder='message' id='message' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

             <button   className=' m-5 w-96 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80'>
              Finish
            </button>
            
        </form>
      </div>
      </div>
    </div>
  );
}
