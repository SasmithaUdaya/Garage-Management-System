import React, { useEffect, useState } from 'react';
import Customerdashboard from '../components/Customerdashboard';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import b1 from '../Image/b3.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

export default function Customerdaliupdate() {
    const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { email } = useParams();

  const [formData, setFormData] = useState({
    _id : '',
    email: '',
    vehiclenumber: '',
    date: '',
    details: '',
    
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/backend/daily/customerviewstatus/${currentUser.email}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (currentUser.email) {
      fetchUserData();
    }
  }, [currentUser.email]);

  return (
    <div style={{...styles, display: 'flex', padding: '0px' }}>
      <div style={{ width: '250px', background: 'black', padding: '0px' ,height:'500px'}}><Customerdashboard /></div>
      <div className='mx-auto'>
        <h1 className='text-3xl text-center font-bold my-5 text-yellow-500'>Vehicle Status</h1>


        <div  className="flex flex-col gap-4 w-full">

            <table className='w-full border-collapse border'>
                <thead>
                <tr className='bg-blue-500'>
                        <th className='border border-gray-300 px-4 py-2'>Vehicle</th>
                        <th className='border border-gray-300 px-4 py-2'>Status</th>
                        <th className='border border-gray-300 px-4 py-2'>Date</th>    
                 </tr>
                    

                </thead>
                <tbody className='text-white'>
                    <td  className='border border-gray-300 px-4 py-2 '>{formData.vehiclenumber}</td>
                    <td  className='border border-gray-300 px-4 py-2'>{formData.details}</td>
                    <td  className='border border-gray-300 px-4 py-2'>{new Date(formData.date).toLocaleDateString()}</td>
                </tbody>
            </table>

            </div>
            </div>
            </div>
  )
}
