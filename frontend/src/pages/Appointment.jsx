import React from 'react';
import Section from './Section';
import { useNavigate } from 'react-router-dom';
import image1 from '/Users/kanishkarathnayake/itp2023/Garage-Management-System/frontend/src/assets/assets1.png'; // Adjust the path accordingly
import image2 from '/Users/kanishkarathnayake/itp2023/Garage-Management-System/frontend/src/assets/assets1.png'; // Adjust the path accordingly

function Appointment() {
  const navigate = useNavigate();

  const handleServiceAppointmentClick = () => {
    navigate('/appointmentcreate');
  };

  const handleAgentAppointmentClick = () => {
    navigate('/agentappointment');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'black'}}>    
      <h2 className="text-4xl font-bold text-center py-2 px-4 mb-[-2]">
        <span style={{ color: 'white' }}> You are only one Appointment away from </span> <span style={{ color: 'red' }}>HELP !!!</span>
      </h2>

      <div className='w-full p-4' style={{ height: '700px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <div className="container mx-auto px-2 py-2">
          <Section
            imageUrl={image1}
            heading={<span>Schedule a service appointment</span>}
            text="Get your car serviced by our certified mechanics"
            onClick={handleServiceAppointmentClick}
            Button="Make Appointment" 
          />
        </div>

        <div className="container mx-auto px-4 py-4 mt-4">
          <Section
            imageUrl={image2}
            heading={<span>Schedule an Appointment with Agent</span>}
            text="Get your insurance advices from our trusties"
            onClick={handleAgentAppointmentClick}
            Button="Make Appointment"
          />
        </div>
      </div>
    </div>
  );
}

export default Appointment;