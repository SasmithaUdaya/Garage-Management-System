import React, { useEffect, useState, useRef } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import axios from 'axios';

import b1 from '../Image/mb2.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

export default function Allreactionhistory() {
    const [formData, setFormData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [query, setQuery] = useState('');
    const tableRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/backend/history/allreactionhistory');
                setFormData(res.data);
                setFilterData(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const getSearch = e.target.value;

        if (getSearch.length > 0) {
            const searchdata = formData.filter((item) => item.vehiclenumber.toLowerCase().includes(getSearch));
            setFormData(searchdata);
        } else {
            setFormData(filterData);
        }

        setQuery(getSearch);
    };


  return (
    <div className='flex' style={styles}>
      <div style={{ width: '250px', height: '487px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='w-3/4 p-10'>
      <div> 
      <input value={query}
       onChange={(e) => handleSearch(e)} type='text'  placeholder='Fillter...' style={{ padding: '5px', border: '1px solid ' }}
       className="border-2 my-4 border-gray-300 px-4 py-2 w-36 bg-transparent text-white font-semibold"
        />
      </div>
        <table className='w-full border-collapse border-2  bg-slate-400 opacity-80  '>
          <thead>
            <tr className='bg-blue-500'>
              <th className='border-2 border-gray-300 px-4 py-2'>Email</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Vehicle Number</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Approvel</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Engine</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Tyres</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Parts</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Request</th>
              
            </tr>
          </thead>
          <tbody>
           
          {formData.map((status) => (
              
                <tr className='text-black font-semibold'>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.email}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.vehiclenumber}</td>
                  <td className='border-2 border-gray-100 px-4 py-2'>{status.approvel}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.engine}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.tyre}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.parts}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.additional}</td>
                  
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
