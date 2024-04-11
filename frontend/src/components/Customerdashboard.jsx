import React from 'react'
import { FaBook, FaEdit, FaEnvelope, FaEye, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Customerdashboard() {
  return (
    <div >
    <div >
      <div className="p-4 ">
        <div className="text-xl text-white font-bold mb-4">Dashboard</div>
        <ul className='  font-bold  '>
        <Link to="/customerview">
          <li className="py-2 border p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md  cursor-pointer flex " > <FaBook className=" mr-2 text-slate-600 " />Vehicle Data </li>
          </Link>
         
          <Link to="">
            <li className="py-2 border p-3 bg-red-500 hover:bg-red-600 text-white rounded-md  cursor-pointer flex"><FaEnvelope className=" mr-2 text-slate-600 " />Daily Status</li>
          </Link>
         
         
        </ul>
      </div>
    </div>
    <div className="flex-1 p-4">
      
      {/* add image */}
    </div>
  </div>
  )
}
