import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Repairdashboard from '../components/Repairdashboard';

import b1 from '../Image/mb2.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

export default function Deletereaction() {

    const navigate = useNavigate();
  
  const { id } = useParams();
  const [formData, setFormData] = useState({
    email: '',
    vehiclenumber: '',
    tyre: '',
    engine: '',
    parts:'',
    approvel:'',
    additional:'',

  });

  useEffect(() => {
    axios.get(`http://localhost:5173/backend/reaction/onereaction/${id}`)
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
    try {
      await axios.post('http://localhost:5173/backend/history/createReactionshistory', formData);
   
        try {
          const res = await fetch(`http://localhost:5173/backend/reaction/deletereaction/${id}`, {
            method: 'DELETE',
          });
    
          if (res.ok) {
            
            alert('Successfully Deleted');
          } else {
            alert('Error deleting reaction');
          }
        } catch (error) {
          console.log(error.message);
        }
      
    
     navigate('/reaction');

    
    } catch (err) {
      console.error(err);
      alert('Error updating daily status');
    }

  };



// const deleteReaction = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5173/backend/reaction/deletereaction/${id}`, {
//         method: 'DELETE',
//       });

//       if (res.ok) {
        
//         alert('Successfully Deleted');
//       } else {
//         alert('Error deleting reaction');
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

  


  return (
    <div style={{...styles, display: 'flex', padding: '0px' }} >
      <div style={{ width: '250px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='mx-auto'>
        <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Delete Reaction</h1>

        <form  className='flex flex-col gap-4'>

          <input  onChange={handleChange}  type='email' id='email'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white' defaultValue={formData.email}  />
          <input  onChange={handleChange}  type='text' id='vehiclenumber'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white'  defaultValue={formData.vehiclenumber}/>
          <input  onChange={handleChange} type='text' id='approvel'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white' defaultValue={formData.approvel}/>
          <input  onChange={handleChange}  type='text' id='tyre'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white' defaultValue={formData.tyre}/>
          <input  onChange={handleChange} type='text' id='engine'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white' defaultValue={formData.engine}/>
          <input  onChange={handleChange} type='text' id='parts'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white' defaultValue={formData.parts} />
          <input  onChange={handleChange} type='text' id='additional'  className='border p-3 rounded-lg w-96 bg-slate-900 text-white' defaultValue={formData.additional} />

        </form>

        <button
             onClick={handleEdit}
            className=' my-4 w-96 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-black rounded-lg p-3 uppercase text-sm font-bold hover:opacity-90 disabled:opacity-80'
          >
            Delete
          </button>

        
      

      </div>
    </div>
  );
}