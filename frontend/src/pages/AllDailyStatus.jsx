import React, { useEffect, useState } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaFilter, FaTrash } from 'react-icons/fa';


import b1 from '../Image/mb2.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };


export default function AllDailyStatus() {

  const [formData, setFormData] = useState([]);
  const [filterData , setFilterData] = useState([]);
  const [query , setQuery] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/backend/daily/getAllStatus');
        setFormData(res.data);
 
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const deleteStatus = async (id) => {
    try {
      const res = await fetch(`/backend/daily/deleteStatus/${id}`, {
        method: 'DELETE',
      });

      setFormData(formData.filter((issue) => issue._id !== id));
      alert('Successfully Deleted');

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (e) => {

    const getSearch = e.target.value;
    // console.log(getSearch);

    if(getSearch.length > 0)
    {
      const searchdata = formData.filter( (item) => item.vehiclenumber.toLowerCase().includes(getSearch));
      setFormData(searchdata);
    
    }else {
      setFormData(filterData);
    }

    setQuery(getSearch);

  }

  return (
    <div className='flex' style={styles}>
      <div style={{ width: '250px', height: '487px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='w-3/4 p-10'>
      <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Daily Status</h1>
      <div> 
      <input type='text' placeholder='Fillter...'  style={{ padding: '5px', border: '1px solid ' }}
                        className="border-2 my-4 border-gray-300 px-4 py-2 w-36 bg-transparent text-white font-semibold"
                    value={query} onChange={(e) => handleSearch(e)}/>
      </div>
        <table className='w-full border-collapse border-2 bg-slate-400 opacity-80 '>
          <thead>
            <tr className= 'bg-blue-500  '>
              <th className='border-2 border-gray-300 px-4 py-2'>Email</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Vehicle Number</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Status</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Date</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Edit</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Detele</th>


            </tr>
          </thead>
          <tbody>
            {formData.map((status) => {
             

              return (
                <tr key={status._id} className='text-black  font-semibold'>
                  <td className='border-2 border-gray-300 px-4 py-2 '>{status.email}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.vehiclenumber}</td>
                 
                  <td className='border-2 border-gray-300 px-4 py-2'>{status.details}</td>
              
                  <td className='border-2 border-gray-300 px-4 py-2'>{new Date(status.date).toLocaleDateString()}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'><Link to={`dailyupdate/${status._id}`}><div className='m-4 text-green-800' title='Update status'><FaEdit/></div></Link></td>
                  <td className='border-2 border-gray-300 px-4 py-2'><div className='m-4 text-red-700'title='Delete status'><button onClick={() => deleteStatus(status._id)} ><FaTrash/></button></div></td>

                </tr>
              );
            })}
          </tbody>

          </table>
          </div>
          </div>
  )
}
