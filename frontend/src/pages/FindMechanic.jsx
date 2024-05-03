import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'jspdf-autotable';

export default function FindMechanic() {

  const [formData, setFormData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState('');
  const tableRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/attendancetrack/getall');
        setFormData(res.data);
        setFilterData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (e) => {
    const getSearch = e.target.value.toLowerCase();
    if (getSearch.length > 0) {
      const searchdata = formData.filter((item) => item.empName.toLowerCase().includes(getSearch));
      setFormData(searchdata);
    } else {
      setFormData(filterData);
    }
    setQuery(getSearch);
  }

  return (
    <div className="bg-gradient-to-br from-yellow-200 to-blue-400 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-10 bg-black rounded-lg shadow-md border border-gray-300">
        <div> 
          <input type='text' placeholder='Search...' className='my-4' value={query} onChange={(e) => handleSearch(e)} />
        </div>

        <div className='w-full'>
          <table className='w-full border-collapse border bg-yellow-100'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border border-gray-300 px-4 py-2 text-black'>EmployeeName</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>Email</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>Date</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((attendancetrack) => (
                <tr key={attendancetrack._id}>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{attendancetrack.empName}</td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{attendancetrack.email}</td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>
                    {new Date(attendancetrack.date).toLocaleDateString()}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={'/assign'}>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Assign Mechanics to the Accidents 
              </button>
         </Link>
        </div>
      </div>
    </div>
  )
}
