import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GarageManagerDash() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch appointment data from the server
        axios.get("http://localhost:3000/garagemanagerdash")
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Function to sort time slots for each day
    const sortTimeSlotsForDay = (appointmentsForDay) => {
        return appointmentsForDay.sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));
    };


    const handleRemoveAppointment = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to remove this appointment?");
        if (isConfirmed) {
            axios.delete(`http://localhost:3000/delete/${id}`)
                .then(response => {
                    // Remove the deleted appointment from the state
                    setAppointments(appointments.filter(appointment => appointment._id !== id));
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

        // Function to handle completing an appointment
        const handleCompleteAppointment = (id) => {
            const isConfirmed = window.confirm("Are you sure you want to mark this appointment as completed?");
            if (isConfirmed) {
                axios.put(`http://localhost:3000/complete/${id}`)
                    .then(response => {
                        // Update the completed status in the state
                        setAppointments(appointments.map(appointment => {
                            if (appointment._id === id) {
                                return { ...appointment, completed: true };
                            } else {
                                return appointment;
                            }
                        }));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        };

    return (
        <div style={{ padding: '20px', backgroundColor: 'black' }}>
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

                <div className="bg-white rounded-lg p-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4">Customer Name</th>
                                <th className="py-2 px-4">Customer ID</th>
                                <th className="py-2 px-4">Contact Number</th>
                                <th className="py-2 px-4">Service Type</th>
                                <th className="py-2 px-4">Vehicle Model</th>
                                <th className="py-2 px-4">Vehicle Number</th>
                                <th className="py-2 px-4">Time Slot</th>
                                <th className="py-2 px-4">Status</th>
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
                                <td className="py-2 px-4">{appointment.timeSlot}</td>
                                <td className="py-2 px-4">{String(appointment.completed)}</td>
                                <td className="py-2 px-4">
                                    {/* Display buttons only if appointment is not completed */}
                                    {!appointment.completed && (
                                        <>
                                            <button className="bg-green-500 text-white py-1 px-2 rounded-md" onClick={() => handleCompleteAppointment(appointment._id)}>Complete</button>
                                            <button className="bg-red-500 text-white py-1 px-2 rounded-md" onClick={() => handleRemoveAppointment(appointment._id)}>Remove</button>
                                        </>
                                    )}
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
