import React, { useEffect, useState } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import b1 from '../Image/b5.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };


export default function View() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/issues/getAllIssues');
        setFormData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const deleteIssue = async (id) => {
    try {
      const res = await fetch(`/backend/issues/deleteIssue/${id}`, {
        method: 'DELETE',
      });

      setFormData(formData.filter((issue) => issue._id !== id));
      alert('Successfully Deleted');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex' style={styles}>
      <div style={{ width: '250px', height: '487px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='w-3/4 p-10'>
        <table className='w-full border-collapse border bg-slate-400 opacity-80 '>
          <thead>
            <tr className='bg-blue-500'>
              <th className='border-2 border-gray-300 px-4 py-2'>Email</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Vehicle Number</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Vehicle</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Engine</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Tyre</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Parts</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Date</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((repair) => (
              <tr key={repair._id} className=' font-semibold'>
                <td className='border-2 border-gray-300 px-4 py-2'>{repair.email}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{repair.vehiclenumber}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <img src={repair.vehicle} alt='profile' className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
                </td>
                <td className='border-2 border-gray-300 px-4 py-2'>{repair.engine}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{repair.tyre}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{repair.parts}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>{new Date(repair.date).toLocaleDateString()}</td>
                <td className='border-2 border-gray-300 px-4 py-2'>
                  <div className='flex gap-4'>
                    <button onClick={() => deleteIssue(repair._id)} className='text-red-800' title='Delete Issues' style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                      <FaTrash />
                    </button>
                    <Link to={`updateissue/${repair._id}`}>
                      <button title='Update Issues' style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                        <FaEdit className='text-green-900' />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
