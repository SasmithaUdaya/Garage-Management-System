import React, { useEffect, useState } from 'react';
import Customerdashboard from '../components/Customerdashboard';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import b1 from '../Image/b5.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };



export default function CustomerReport() {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const { email } = useParams();
  
    const [formData, setFormData] = useState([]);
    const [filterData , setFilterData] = useState([]);
    const [query , setQuery] = useState();
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:5173/backend/statushistory/customerviewreport/${currentUser.email}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      if (currentUser.email) {
        fetchUserData();
      }
    }, [currentUser.email]);

    const handleSearch = (e) => {

        const getSearch = e.target.value;
        // console.log(getSearch);
  
        if(getSearch.length > 0)
        {
          const searchdata = formData.filter( (item) => item.details.toLowerCase().includes(getSearch));
          setFormData(searchdata);
        
        }else {
          setFormData(filterData);
        }
  
        setQuery(getSearch);
  
      }
  
  
    return (
      <div style={{...styles, display: 'flex', padding: '0px' }}>
        <div style={{ width: '250px', background: 'black', padding: '0px' }}><Customerdashboard /></div>
        <div className='mx-auto'>
          <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Vehicle Status</h1>
  
  
          <div  className="flex flex-col gap-4 w-full">
          <div> 
      <input type='text' placeholder='Search...'  value={query} onChange={(e) => handleSearch(e)}
            style={{ padding: '5px', border: '1px solid ' }}
            className="border-2 my-4 border-gray-300 px-4 py-2 w-36 bg-transparent text-white font-semibold"
       />
      </div>
  
              <table className='w-full border-collapse border'>
                  <thead>
                  <tr className='bg-blue-500 border-2'>
                          <th className='border-2 border-gray-300 px-4 py-2'>Vehicle</th>
                          <th className='border-2 border-gray-300 px-4 py-2'>Status</th>
                          <th className='border-2 border-gray-300 px-4 py-2'>Date</th>    
                   </tr>
                      
  
                  </thead>

                  
                  <tbody className='text-white'>
                  {formData.map((status) => {
             

             return (
                    <tr key={status._id}>
                      <td  className='border-2 border-gray-300 px-4 py-2'>{status.vehiclenumber}</td>
                      <td  className='border-2 border-gray-300 px-4 py-2'>{status.details}</td>
                      <td  className='border-2 border-gray-300 px-4 py-2'>{new Date(status.date).toLocaleDateString()}</td>
                 </tr>
                  );
                })}
                  </tbody>
              </table>
  
              </div>
              </div>
              </div>
    )
  }
  