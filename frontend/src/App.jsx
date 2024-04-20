import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appointment from './pages/Appointment'
import CreateAppointment from './pages/CreateAppointment'
import UpdateAppointment from './pages/UpdateAppointment'
import CustomerProfile from './pages/CustomerProfile'
import GarageManagerDash from './pages/GarageManagerDash'
import AppointmentHistory from './pages/AppointmentHistory'
import AgentAppointment from './pages/AgentAppointment'
import Header from '../components/Header'


export default function App() {
  return <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/appointmentlanding' element={<Appointment/>} /> 
            <Route path='/appointmentcreate' element={<CreateAppointment/>} />  
            <Route path='/appointmentupdate/:id' element={<UpdateAppointment/>} />  
            <Route path='/customerprofile' element={<CustomerProfile/>} />   
            <Route path='/garagemanagerdash' element={<GarageManagerDash/>} />
            <Route path='/appointmenthistory' element={<AppointmentHistory/>} /> 
            <Route path='/agentappointment' element={<AgentAppointment/>} /> 
            <Route path='/customerprofile' element={<CustomerProfile/>} /> 
          </Routes>
          </BrowserRouter>
}
