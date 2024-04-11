import React, { useEffect, useState } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import axios from 'axios';
import { FaArchive, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Customerreaction() {
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
  
    
  return (
    <div className='flex'>
      <div style={{ width: '250px', height: '487px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='w-3/4 p-10'>
        <table className='w-full border-collapse border'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2'>Email</th>
              <th className='border border-gray-300 px-4 py-2'>Vehicle Number</th>
              <th className='border border-gray-300 px-4 py-2'>Vehicle</th>
              <th className='border border-gray-300 px-4 py-2'>Approvel</th>
              <th className='border border-gray-300 px-4 py-2'>Reaction</th>
              <th className='border border-gray-300 px-4 py-2'>Daily Status</th>

            </tr>
          </thead>
          <tbody>
            {formData.map((repair) => (
              <tr key={repair._id}>
                <td className='border border-gray-300 px-4 py-2'>{repair.email}</td>
                <td className='border border-gray-300 px-4 py-2'>{repair.vehiclenumber}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  <img src={repair.vehicle} alt='profile' className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
                </td>
                <td className='border border-gray-300 px-4 py-2'>{repair.approvel}</td>

                <td className='border border-gray-300 px-4 py-2'>{repair.requirment}</td>
                <td className='border border-gray-300 px-4 py-2'><Link to={`adddailyupdate/${repair._id}`}><div className='m-8 text-green-500'><FaArchive/></div></Link></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

