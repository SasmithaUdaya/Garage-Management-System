import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Request() {
  const [formData, setFormData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

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

  // Function to handle checkbox selection
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Function to handle saving checkbox state to backend
  const saveSelectedRows = async () => {
    try {
      // Make a POST request to save selected rows to backend
      await axios.post('/backend/saveSelectedRows', { selectedRows });
      console.log('Selected rows saved successfully!');
    } catch (error) {
      console.error('Error saving selected rows:', error.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-200 to-blue-400 min-h-screen flex justify-center items-center">
      <div className="w-3/4 py-10">
        <table className='w-full border-collapse border bg-yellow-200 rounded-lg'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2 text-black'>CusId</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>CusName</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Date</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Mobile</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>Location</th>
              <th className='border border-gray-300 px-4 py-2 text-black'>VehicleNo</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((request) => (
              <tr key={request._id}>
                <td className='border border-gray-300 px-4 py-2 text-black'>{request.cusId}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{request.cusName}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>
                  {new Date(request.date).toLocaleDateString()}
                </td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{request.mobile}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{request.location}</td>
                <td className='border border-gray-300 px-4 py-2 text-black'>{request.vehicleNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
         
          <Link to='/find'>
            <button className="bg-gradient-to-r from-yellow-200 to-blue-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-600 text-white font-bold py-2 px-4 rounded ml-4">
              Search Mechanic
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
