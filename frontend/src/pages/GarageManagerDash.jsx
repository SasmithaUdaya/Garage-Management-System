import React from 'react'

export default function GarageManagerDash() {
    return (
        <div style={{ padding: '20px', backgroundColor: 'black'}}>    
            <div className="flex justify-between items-center mb-4">
                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded py-2 px-3 mr-4"
                    style={{ backgroundColor: 'white', minWidth: '400px' }}
                />
                {/* Sign-out button */}
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        // Add sign-out functionality here
                    }}
                >
                    Add New Services
                </button>
            </div>
    
          <div className='w-full p-4' style={{ height: '700px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>

    
          </div>
        </div>
      );
}
