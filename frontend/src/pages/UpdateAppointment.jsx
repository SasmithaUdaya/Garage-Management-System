import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateAppointment() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [serviceType, setServiceType] = useState('null');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (e) => {
    setTimeslot(e.target.value);
  };

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const timeSlots = [
    '08:00-09:00',
    '09:00-10:00',
    '10:00-11:00',
    '11:00-12:00',
    '13:00-14:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '17:00-18:00',
    '18:00-19:00',
  ];

  const serviceTypes = [
    'Oil Change',
    'Tire Rotation',
    'Brake Inspection',
    'Engine Tune-Up',
    'Wheel Alignment',
    'Battery Replacement',
    'Transmission Service',
    'AC Service',
  ];


  return (
    <div style={{ padding: '20px', backgroundColor: 'black' }}>    
      <h2 className="text-4xl font-bold text-center py-2 px-4 mb-[-2]">
        <span style={{ color: 'white' }}> Submit Your Appointment </span>
      </h2>

      <div className='w-full p-4' style={{ height: '700px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px',
       borderBottomRightRadius: '30px', backgroundColor: 'rgba(255, 255, 255, 0.3)', paddingLeft: '70px' }}>

        <form>
        <div className="flex items-center mb-4"> {/* Use flex and items-center to align items horizontally */}
        <label htmlFor="customerName" className="mb-1 mr-2 " style={{ color: 'white', fontSize: '24px' }}>Customer Name:</label> {/* Add mr-2 for right margin */}
        <input type="text" id="customerName" name="customerName" className="border rounded py-2 px-3" style={{ marginLeft: '100px', width: '500px' }}/>
        </div>

        <div className="flex items-center mb-4"> {/* Use flex and items-center to align items horizontally */}
        <label htmlFor="customerId" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Customer ID:</label> {/* Add mr-2 for right margin */}
        <input type="text" id="customerId" name="customerId" className="border rounded py-2 px-3" style={{ marginLeft: '140px', width: '500px' }}/>
        </div>

        <div className="flex items-center mb-4"> {/* Use flex and items-center to align items horizontally */}
        <label htmlFor="contactNumber" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Contact Number:</label> {/* Add mr-2 for right margin */}
        <input type="text" id="contactNumber" name="contactNumber" className="border rounded py-2 px-3" style={{ marginLeft: '100px', width: '500px' }}/>
        </div>


        <div className="flex items-center mb-4">
            <label htmlFor="serviceType" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Service Type:</label>
            <select id="serviceType" name="serviceType" onChange={handleServiceTypeChange} className="border rounded py-2 px-3" style={{ marginLeft: '125px', width: '500px' }}>
              <option value="">Service Type</option>
              {serviceTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
       

        <div className="flex items-center mb-4"> {/* Use flex and items-center to align items horizontally */}
        <label htmlFor="vehicleModel" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Vehicle Model:</label> {/* Add mr-2 for right margin */}
        <input type="text" id="vehicleModel" name="vehicleModel" className="border rounded py-2 px-3" style={{ marginLeft: '125px', width: '500px' }}/>
        </div>

        <div className="flex items-center mb-4"> {/* Use flex and items-center to align items horizontally */}
        <label htmlFor="vehicleNumber" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Vehicle Number:</label> {/* Add mr-2 for right margin */}
        <input type="text" id="vehicleNumber" name="vehicleNumber" className="border rounded py-2 px-3" style={{ marginLeft: '105px', width: '500px' }}/>
        </div>


        <div className="flex items-center mb-4"> {/* Use flex and items-center to align items horizontally */}
            <label htmlFor="date" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Appointment Date:</label> {/* Add mr-2 for right margin */}
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className="border rounded py-2 px-3"
              style={{ width: '300px' }}
            />
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="timeslot" className="mb-1 mr-2" style={{ color: 'white', fontSize: '24px' }}>Preferred Time Slot:</label>
            <select id="timeslot" name="timeslot" onChange={handleTimeSlotChange} className="border rounded py-2 px-3" style={{ width: '300px' }}>
              <option value="">Select a timeslot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ marginTop: '20px', float: 'right', width: '200px' }}>Submit</button>

           </form>
      </div>
    </div>
  );
}
