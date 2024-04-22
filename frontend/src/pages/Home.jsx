import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (

    <div className='p-4'>
      <div className="flex items-center">
        <h1 className="text-3xl my-8 text-blue-900">Home Page </h1>
      </div>
    <div flex justify-center items-center gap-x-3 px-2 py-3 w-full>
        
      <Link to="/faqs">
        <button className="bg-gray-300 border-2 border-blue-600 text-black px-4 py-1 rounded-lg w-72 h-15 font-bold text-lg shadow-md">
          FAQs
        </button>
      </Link>
      <Link to="/feedback/create">
        <button className="bg-gray-300 border-2 border-blue-600 text-black px-4 py-1 rounded-lg w-72 h-15 font-bold text-lg shadow-md">
          Feedbacks
        </button>
      </Link>
    </div>
    </div>
  )
}
