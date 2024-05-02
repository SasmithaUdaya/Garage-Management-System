import { Sidebar } from 'flowbite-react';
import { HiDocument, HiOutlineExclamationCircle, HiUser } from 'react-icons/hi';
import { FaQrcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Admindashboard() {
  return (
    
        <Sidebar className='p-10 flex flex-col gap-4 bg-slate-900 w-50'> 
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to='/employee'>
              <Sidebar.Item active icon={HiUser} label={'Admin'} labelColour='dark' as='div' className='bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 cursor-pointer'>
                Manage Employee
              </Sidebar.Item>
            </Link>
            <Sidebar.Item active icon={FaQrcode} label={'Admin'} labelColour='dark' className='bg-green-500 hover:bg-green-600 text-white rounded-md p-2 cursor-pointer'>
              Generate QR
            </Sidebar.Item>
            <Sidebar.Item active icon={HiDocument} label={'Admin'} labelColour='dark' className='bg-yellow-500 hover:bg-yellow-600 text-white rounded-md p-2 cursor-pointer'>
              Generate reports
            </Sidebar.Item>
            <Sidebar.Item active icon={HiUser} label={'Admin'} labelColour='dark' className='bg-red-500 hover:bg-red-600 text-white rounded-md p-2 cursor-pointer'>
              Calculate salary
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    
  )
}
