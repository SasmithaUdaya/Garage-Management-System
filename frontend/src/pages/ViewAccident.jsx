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

    doc.save('Repair Status.pdf');
  }

  const deleteAccident = async (id) => {
    try {
      await axios.delete(`/backend/accident/deleteAccident/${id}`);
      setFormData(formData.filter((issue) => issue._id !== id));
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
    <div className="container mx-auto p-10">
      <div> 
        <input type='text' placeholder='Search...' className='my-4' value={query} onChange={(e) => handleSearch(e)} />
      </div>

      <div className='w-3/4'>
        <table className='w-full border-collapse border' ref={tableRef}>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2'>MacName</th>
              <th className='border border-gray-300 px-4 py-2'>Location</th>
              <th className='border border-gray-300 px-4 py-2'>Date</th>
              <th className='border border-gray-300 px-4 py-2'>CusMobile</th>
              <th className='border border-gray-300 px-4 py-2'>MacId</th>
              <th className='border border-gray-300 px-4 py-2'>CordId</th>
              <th className='border border-gray-300 px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((accident) => (
              <tr key={accident._id}>
                <td className='border border-gray-300 px-4 py-2'>{accident.macName}</td>
                <td className='border border-gray-300 px-4 py-2'>{accident.location}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  {new Date(accident.date).toLocaleDateString()}
                </td>
                <td className='border border-gray-300 px-4 py-2'>{accident.contact}</td>
                <td className='border border-gray-300 px-4 py-2'>{accident.mechanicId}</td>
                <td className='border border-gray-300 px-4 py-2'>{accident.coordinatorId}</td>
                <td className='border border-gray-300 px-4 py-2 '>
                  <div className='flex gap-4'>
                    <button onClick={() => deleteAccident(accident._id)} className='text-red-800'>
                      <FaTrash />
                    </button>
                    <Link to={`change/${accident._id}`}>
                      <button>
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDownload} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Generate and Download Report
        </button>
      </div>
    </div>
  )
}
