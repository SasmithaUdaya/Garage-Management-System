import React, { useEffect, useState } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import axios from 'axios';
import { FaArchive } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Customerreaction() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/reaction/getAllReactions');
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
              <th className='border border-gray-300 px-4 py-2'>Approvel</th>
              <th className='border border-gray-300 px-4 py-2'>Engine</th>
              <th className='border border-gray-300 px-4 py-2'>Tyres</th>
              <th className='border border-gray-300 px-4 py-2'>Parts</th>
              <th className='border border-gray-300 px-4 py-2'>Request</th>
              <th className='border border-gray-300 px-4 py-2'>Date</th>
              <th className='border border-gray-300 px-4 py-2'>Time</th>
              <th className='border border-gray-300 px-4 py-2'>Daily Status</th>
              <th className='border border-gray-300 px-4 py-2'>Time Diffrece</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((repair) => {
              const currentTime = new Date().getTime(); // Current time in milliseconds
              const repairTime = new Date(repair.time).getTime(); // Convert repair time to milliseconds
              const timeDifferenceMs =currentTime - repairTime  ; // Difference in milliseconds
              const timeDifference = new Date(timeDifferenceMs).toISOString().substr(11, 8); // Format: HH:mm:ss

              return (
                <tr key={repair._id}>
                  <td className='border border-gray-300 px-4 py-2'>{repair.email}</td>
                  <td className='border border-gray-300 px-4 py-2'>{repair.vehiclenumber}</td>
                  <td className='border border-gray-300 px-4 py-2'>{repair.approvel}</td>
                  <td className='border border-gray-300 px-4 py-2'>{repair.engine}</td>
                  <td className='border border-gray-300 px-4 py-2'>{repair.tyre}</td>
                  <td className='border border-gray-300 px-4 py-2'>{repair.parts}</td>
                  <td className='border border-gray-300 px-4 py-2'>{repair.additional}</td>
                  <td className='border border-gray-300 px-4 py-2'>{new Date(repair.rdate).toLocaleDateString()}</td>
                  <td className='border border-gray-300 px-4 py-2'>{new Date(repair.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</td>
                  <td className='border border-gray-300 px-4 py-2'><Link to={`adddailyupdate/${repair._id}`}><div className='m-4 text-green-500'><FaArchive/></div></Link></td>
                  <td className='border border-gray-300 px-4 py-2'>{timeDifference}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p> {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).replace(/:/g, '.')}</p>
      </div>
    </div>
  );
}
