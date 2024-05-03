import React, { useEffect, useState } from 'react';
import Repairdashboard from '../components/Repairdashboard';
import axios from 'axios';
import { FaArchive, FaExternalLinkAlt, FaReact, FaReply, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import b1 from '../Image/x14.png';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

export default function Customerreaction() {
  const [formData, setFormData] = useState([]);
  const [filterData , setFilterData] = useState([]);
  const [query , setQuery] = useState();

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

  // const deleteReaction = async (id) => {
  //   try {
  //     const res = await fetch(`/backend/reaction/deletereaction/${id}`, {
  //       method: 'DELETE',

        
  //     });
      

  //     setFormData(formData.filter((issue) => issue._id !== id));
  //     alert('Successfully Deleted');

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className='flex' style={styles}>
      <div style={{ width: '250px', height: '487px', background: 'black', padding: '0px' }}>
        <Repairdashboard />
      </div>
      <div className='w-3/4 p-10'>
      <div> 
      <input type='text'  placeholder='Fillter...' style={{ padding: '5px', border: '1px solid ' }}
                        className="border-2 my-4 border-gray-300 px-4 py-2 w-36 bg-transparent text-white font-semibold"
                   value={query} onChange={(e) => handleSearch(e)}/>
      </div>
        <table className='w-full border-collapse border-2  bg-slate-400 opacity-80 '>
          <thead>
            <tr className='bg-blue-500'>
              <th className='border-2 border-gray-300 px-4 py-2'>Email</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Vehicle Number</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Approvel</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Engine</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Tyres</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Parts</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Request</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Date</th>
              <th className='border-2 border-gray-300 px-4 py-2'>Daily Status</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((repair) => {
              const currentTime = new Date().getTime(); // Current time in milliseconds
              const repairTime = new Date(repair.time).getTime(); // Convert repair time to milliseconds
              const timeDifferenceMs =currentTime - repairTime  ; // Difference in milliseconds
              const timeDifference = new Date(timeDifferenceMs).toISOString().substr(11, 8); // Format: HH:mm:ss

              return (
                <tr key={repair._id} className='text-black font-semibold'>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.email}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.vehiclenumber}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.approvel}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.engine}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.tyre}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.parts}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{repair.additional}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'>{new Date(repair.rdate).toLocaleDateString()}</td>
                  <td className='border-2 border-gray-300 px-4 py-2'><Link to={`adddailyupdate/${repair._id}`}><div className='m-4 text-green-900' title='Sent Daily Status'><FaReply/></div></Link>
                  <div className='m-4 text-red-800' title='Delet Reaction'><Link to={`deletereaction/${repair._id}`}><button><FaTrash/></button></Link></div></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
