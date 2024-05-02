import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [nic, setNIC] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5173/backend/checkout/checkout", { fName, lName, nic, phone, email })
    navigate('/buyer')
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: "url(/Lambogini.jpg)"}}>
      <h1 className="text-4xl p-4">
        <span className="text-yellow-600 font-semibold">Checkout</span>
        <span className="text-white font-semibold">Page</span>
      </h1>
      <h1 className="text-xl text-white px-8 font-semibold italic">Finalize purchase and payment</h1>

      <div className='min-h-screen p-10 flex items-center justify-center bg-gray-0'>
        <div className='max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
            
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 bg-gray-500 p-8 mb-4 rounded-lg w-full md:w-3/4 lg:w-1/2'>
            <div className='flex flex-col gap-5 justify-center'> {/* Changed 'just' to 'justify-center' */}
              <div className="flex justify-center">
                <h1 className="text-4xl">
                  <span className="text-yellow-600 font-semibold">Purchase</span>
                  <span className="text-white font-semibold">Details</span>
                </h1>
              </div>
              <div className='flex gap-5 items-center'>
                <label htmlFor='firstname' className='text-lg'>First Name:</label>
                <input required type='text' placeholder='Enter your first name' className='border p-3 rounded-lg bg-gray-400 placeholder-black text-lg' id='firstname' name='firstname' 
                  value={fName} onChange={(e) => setFName(e.target.value)} />
              </div>
              <div className='flex gap-5 items-center'>
                <label htmlFor='lastname' className='text-lg'>Last Name:</label>
                <input required type='text' placeholder='Enter your last name' className='border p-3 rounded-lg bg-gray-400 placeholder-black text-lg' id='lastname' name='lastname' 
                  value={lName} onChange={(e) => setLName(e.target.value)} />
              </div>
              <div className='flex gap-5 items-center'>
                <label htmlFor='nic' className='text-lg'>NIC:</label>
                <input required type='text' placeholder='Enter your NIC' className='border p-3 rounded-lg bg-gray-400 placeholder-black text-lg' id='nic' name='nic' 
                  value={nic} onChange={(e) => setNIC(e.target.value)} />
              </div>
              <div className='flex gap-5 items-center'>
                <label htmlFor='phone' className='text-lg'>Phone:</label>
                <input required type='phone' placeholder='Enter your phone number' className='border p-3 rounded-lg bg-gray-400 placeholder-black text-lg' id='phone' name='phone' 
                  value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='flex gap-5 items-center'>
                <label htmlFor='email' className='text-lg'>Email:</label>
                <input required type='email' placeholder='Enter your email address' className='border p-3 rounded-lg bg-gray-400 placeholder-black text-lg' id='email' name='email' 
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn btn-success bg-yellow-600 text-black py-1 px-4 font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-300 text-lg">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <form className='bg-gray-500 p-8 rounded-lg w-full md:w-3/4 lg:w-2/3'>
            <div className="flex justify-center mb-4">
              <h1 className="text-4xl">
                <span className="text-yellow-600 font-semibold">Order</span>
                <span className="text-white font-semibold">Summary</span>
              </h1>
            </div>
            <table className='w-full text-left'>
              <thead>
                <tr>
                  <th className='pr-4'>Subtotal</th>
                  <td className='font-semibold'>50,000</td>            
                </tr>
                <tr>
                  <th className='pr-4'>Service Charge</th> 
                  <td className='font-semibold'>5,000</td>            
                </tr>
                <tr>
                  <th className='pr-4'>Discount</th>
                  <td className='font-semibold'>500</td>              
                </tr>
                <tr>
                  <th className='pr-4'>Tax</th>
                  <td className='font-semibold'>50</td>              
                </tr>
                <tr>
                  <td colSpan="2"><hr className="my-2 border-gray-400"></hr></td>
                </tr>
                <tr>
                  <th className='pr-4'>Total</th>
                  <td className='font-semibold'>54,550</td>
                </tr>
              </thead>  
            </table>
            <div className='flex gap-4 my-4'></div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}
