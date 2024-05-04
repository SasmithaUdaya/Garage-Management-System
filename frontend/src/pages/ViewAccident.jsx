import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import jspdf from 'jspdf';
import 'jspdf-autotable';

export default function ViewAccident() {

  const [formData, setFormData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState('');
  const tableRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/accident/getAllAccident');
        setFormData(res.data);
        setFilterData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/backend/accident/deleteAccident/${id}`, formData);
      alert('Accident details deleted successfully');
      navigate('/viewacc');
    } catch (err) {
      console.error(err);
      alert('Error updating Accident');
    }
  };

  function handleDownload() {
    const doc = new jspdf();
    const marginLeft = 40;

    doc.setDrawColor(0);
    doc.setLineWidth(2);
    doc.roundedRect(10, 20, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 40, 10, 10, 'D');

    doc.setFontSize(15);
    doc.text('Repair Report', 90, 35);

    const headers = [['MecNaame', 'Location', 'Date', 'Contact','MacID','CorID']];
    const data = formData.map((item) => [
        item.macName,
        item.location,
        new Date(item.date).toLocaleDateString(),       
        item.contact,
        item.mechanicId,
        item.coordinatorId,
    ]);

    const columnStyles = {
      0: { columnWidth: 30 }, 
      1: { columnWidth: 30 }, 
      2: { columnWidth: 30 }, 
      3: { columnWidth: 30 }, 
      4: { columnWidth: 30 },
      5: { columnWidth: 30 },
    };

    const end = "<<< This is auto generated report. All rights E.G Motors >>>";

    doc.autoTable({
        startY: 50,
        head: headers,
        body: data,
        columnStyles: columnStyles, 
    });

    doc.text(end, marginLeft, 270)

    doc.save('Accident Report.pdf');
  }

  const deleteAccident = async (id) => {
    try {
      await axios.delete(`/backend/accident/deleteAccident/${id}`);
      setFormData(formData.filter((issue) => issue._id !== id));
      alert('Accident deleted successfully');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value.toLowerCase();
    if (getSearch.length > 0) {
      const searchdata = formData.filter((item) => item.macName.toLowerCase().includes(getSearch));
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
                <th className='border border-gray-300 px-4 py-2 text-black'>MacName</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>Location</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>Date</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>CusMobile</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>MacId</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>CordId</th>
                <th className='border border-gray-300 px-4 py-2 text-black'>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((accident) => (
                <tr key={accident._id}>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{accident.macName}</td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{accident.location}</td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>
                    {new Date(accident.date).toLocaleDateString()}
                  </td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{accident.contact}</td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{accident.mechanicId}</td>
                  <td className='border border-gray-300 px-4 py-2 text-black'>{accident.coordinatorId}</td>
                  <td className='border border-gray-300 px-4 py-2 '>
                    <div className='flex gap-4'>
                      <button onClick={() => deleteAccident(accident._id)} className='text-red-800 bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded'>
                        <FaTrash />
                      </button>
                      <Link to={`change/${accident._id}`}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                          <FaEdit />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleDownload} className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Generate and Download Report
          </button>
        </div>
      </div>
    </div>
  )
}
