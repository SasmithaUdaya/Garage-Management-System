import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg bg-slate-200 shadow-md py-4'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-4'>
        <Link to='/'>
          <h1 className='font-bold text-2xl sm:text-3xl flex flex-wrap'>
            <span className='text-yellow-200'>EG</span>
            <span className='text-slate-700'>Motors</span>
          </h1>
        </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center ml-4'>
          <input 
            type="text" 
            placeholder="Search..." 
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600 ml-2'/>
        </form>

        <ul className='flex gap-6'>
          <Link to='/'>  
            <li className='hidden sm:inline text-slate-700 hover:underline mr-4'>Home</li>  
          </Link>
          <Link to='about'>  
            <li className='hidden sm:inline text-slate-700 hover:underline mr-4'>About</li>  
          </Link> 
          <Link to='sign-in'>  
            <li className='text-slate-700 hover:underline'>Sign In</li>  
          </Link>
        </ul>
      </div>
    </header>
  ) 
}