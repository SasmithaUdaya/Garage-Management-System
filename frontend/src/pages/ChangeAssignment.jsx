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
    mechanicId : '',
    coordinatorId :'',
  });

  useEffect(() => {
    axios.get(`http://localhost:5173/backend/accident/oneAccident/${id}`)
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

    await axios.put(`/backend/accident/updateAccident/${id}`, formData);
    alert('Status update succesfully');
    navigate('/viewacc');

  } catch (err) {
    console.error(err);
    alert('Error update Accident');
  }
};

  return (
    <div>

    
<div >
      <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Accident Create</h1>

      <form onSubmit={handleEdit} className='flex flex-col gap-4'>

  <input onChange={handleChange} type='text' placeholder='Name' id='macName' value={formData.macName} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='Location' id='location' value={formData.location} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />


  <input onChange={handleChange} type='text' placeholder='Mobile' value={formData.contact} id='contact' className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='MacId' id='mechanicId' value={formData.mechanicId} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <input onChange={handleChange} type='text' placeholder='CorId' id='coordinatorId' value={formData.coordinatorId} className='border p-3 rounded-lg w-96 bg-slate-900 text-white' />

  <button type='submit' className='bg-gradient-to-r from-purple-600 to-blue-600 text-white border-black rounded-lg p-3 uppercase text-xl font-bold hover:opacity-90 disabled:opacity-80'>
    Update
  </button>

</form>

        
        

        
    </div>
    </div>
  )
}
