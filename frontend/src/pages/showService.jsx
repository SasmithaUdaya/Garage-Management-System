import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useSelector } from 'react-redux';


export default function showService() {

   
  const { currentUser } = useSelector((state) => state.user);
 
 
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/Backend/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/Backend/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
        <div className='flex justify-between'>
        <button onClick={handleShowListings} className='text-green-700 w-full px-6 py-4'>
        Show Standalone Services
      </button>
      <button  className='text-green-700 w-full px-6'>
        Show Service Package
      </button>
      <p className='text-red-700 mt-5'>
        {showListingsError ? 'Error showing listings' : ''}
      </p>
      </div>

      {userListings &&
        userListings.length > 0 &&
        <div className="flex flex-col gap-4">
          <h1 className='text-center mt-7 text-2xl font-semibold'>Your Services</h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className='border rounded-lg p-3 flex justify-between items-center gap-4'
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt='listing cover'
                  className='h-16 w-16 object-contain'
                />
              </Link>
              <Link
                className='text-slate-700 font-semibold  hover:underline truncate flex-1'
                to={`/listing/${listing._id}`}
              >
                <p>{listing.name}</p>
              </Link>

              <div className='flex flex-col item-center '>
                <button  onClick={() => handleListingDelete(listing._id)} className='bg-red-700 rounded-lg px-3 py-1 text-white uppercase font-semibold mt-2'>Delete</button>
                <button className='bg-green-700 rounded-lg px-3 py-1 text-white uppercase font-semibold mt-2'>Edit</button>
              </div>
            </div>
          ))}
        </div>}
        </div>
  )
}
