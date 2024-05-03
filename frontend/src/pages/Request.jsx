import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Request() {

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/accidentrequest/getall');
        setFormData(res.data);

      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className='w-3/4 py-10'>
        <table className='w-full border-collapse border'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2'>CusId</th>
              <th className='border border-gray-300 px-4 py-2'>CusName</th>
              <th className='border border-gray-300 px-4 py-2'>Date</th>
              <th className='border border-gray-300 px-4 py-2'>Mobile</th>
              <th className='border border-gray-300 px-4 py-2'>Location</th>
              <th className='border border-gray-300 px-4 py-2'>VehicleNo</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((request) => (
              <tr key={request._id}>
                <td className='border border-gray-300 px-4 py-2'>{request.cusId}</td>
                <td className='border border-gray-300 px-4 py-2'>{request.cusName}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  {new Date(request.date).toLocaleDateString()}
                </td>
                <td className='border border-gray-300 px-4 py-2'>{request.mobile}</td>
                <td className='border border-gray-300 px-4 py-2'>{request.location}</td>
                <td className='border border-gray-300 px-4 py-2'>{request.vehicleNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/assign'>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search Mechanic
          </button>
        </Link>
      </div>
    </div>
  );
}
