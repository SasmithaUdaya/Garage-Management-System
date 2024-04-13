import React from 'react';
import { Link } from 'react-router-dom';

export default function AppointmentHistory() {
  // Dummy data set
  const appointments = [
    {
      _id: 1,
      customerName: "John Doe",
      customerId: "123456",
      contactNumber: "123-456-7890",
      serviceType: "Oil Change",
      vehicleModel: "Toyota Camry",
      vehicleNumber: "ABC123",
      appointmentDate: "2024-04-12",
      timeSlot: "10:00 AM"
    },
    {
      _id: 2,
      customerName: "Jane Smith",
      customerId: "789012",
      contactNumber: "987-654-3210",
      serviceType: "Tire Rotation",
      vehicleModel: "Honda Accord",
      vehicleNumber: "XYZ789",
      appointmentDate: "2024-04-13",
      timeSlot: "11:00 AM"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-white text-3xl">Appointment History Portal</h2>
        </div>

        <div className="bg-white rounded-lg p-4">
          <Link to="/appointmentcreate" className="bg-green-500 text-white py-2 px-4 rounded-md mb-4 inline-block">Create another appointment</Link>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Customer Name</th>
                <th className="py-2 px-4">Customer ID</th>
                <th className="py-2 px-4">Contact Number</th>
                <th className="py-2 px-4">Service Type</th>
                <th className="py-2 px-4">Vehicle Model</th>
                <th className="py-2 px-4">Vehicle Number</th>
                <th className="py-2 px-4">Appointment Date</th>
                <th className="py-2 px-4">Time Slot</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id} className="border-b border-gray-200">
                  <td className="py-2 px-4">{appointment.customerName}</td>
                  <td className="py-2 px-4">{appointment.customerId}</td>
                  <td className="py-2 px-4">{appointment.contactNumber}</td>
                  <td className="py-2 px-4">{appointment.serviceType}</td>
                  <td className="py-2 px-4">{appointment.vehicleModel}</td>
                  <td className="py-2 px-4">{appointment.vehicleNumber}</td>
                  <td className="py-2 px-4">{appointment.appointmentDate}</td>
                  <td className="py-2 px-4">{appointment.timeSlot}</td>
                  <td className="py-2 px-4">
                    <Link to="/appointmentupdate" className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2">Update</Link>
                    <button className="bg-red-500 text-white py-1 px-2 rounded-md" >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
