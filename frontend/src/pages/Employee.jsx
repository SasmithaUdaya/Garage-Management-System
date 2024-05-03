import React from 'react'
import { Link } from 'react-router-dom'

export default function Employee() {
  return (
    <div className="flex justify-center items-center ">
      <Link to='/signup'>
    <button className="bg-blue-800 rounded-lg border p-3 text-white hover:bg-blue-900 m-7">
      + Add Employee
    </button>
    </Link>
  </div>
  )
}
