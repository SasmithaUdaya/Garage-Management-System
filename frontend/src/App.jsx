
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appointment from './pages/Appointment'
import CreateAppointment from './pages/CreateAppointment'
import UpdateAppointment from './pages/UpdateAppointment'
import CustomerProfile from './pages/CustomerProfile'
import GarageManagerDash from './pages/GarageManagerDash'
import AppointmentHistory from './pages/AppointmentHistory'
import AgentAppointment from './pages/AgentAppointment'




import CreateListin from './pages/services/CreateListing';
import Listing from './pages/services/Listing';
import UpdateListing from './pages/services/updateListing';
import ShowService from "./pages/services/showService";

import ClientReport from './pages/services/ClientReport';
import ClientSearch from './pages/services/ClientSearch';
import ShowCart from "./pages/services/showCart";



import Home from './pages/Home';

import About from './pages/About';
import Hearder from './components/Header';
import Admin from './pages/Admin';
import Employee from './pages/Employee';
import Progresssupervisor from './pages/Progresssupervisor';
import Customer from './pages/Customer';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Customersignup from './pages/Customersignup';
import PrivateRoute from './components/PrivateRoute';
import Staffsignin from './pages/Staffsignin';
import User from './components/User';
import Admindashboard from './components/Admindashboard';
import Repairdashboard from './components/Repairdashboard';
import Repaiissue from './pages/Repaiissue';
import View from './pages/View';
import UpdateIssue from './pages/UpdateIssue';
import Customerdashboard from './components/Customerdashboard';
import Customerprofile from './components/Customerprofile';
import Customerview from './pages/Customerview';
import Requiments from './pages/Requiments';
import QR from './pages/QR';
import QRScanner from './pages/QRScanner';
import Customerreaction from './pages/Customerreaction';
import AddDailystatus from './pages/AddDailystatus';
import AllDailyStatus from './pages/AllDailyStatus';
import Dailyupdate from './pages/Dailyupdate';
import Report from './pages/Report';
import Customerdaliupdate from './pages/Customerdaliupdate';
import Updaterequirment from './pages/Updaterequirment';
import Search from './components/Search';
import History from './pages/History';
import CustomerReport from './pages/CustomerReport';
import HaryUP from './pages/HaryUP';


export default function App() {
  return (
    <BrowserRouter>
      <Hearder />

      <Routes>
      <Route path='/appointmentlanding' element={<Appointment/>} /> 
            <Route path='/appointmentcreate' element={<CreateAppointment/>} />  
            <Route path='/appointmentupdate/:id' element={<UpdateAppointment/>} />  
            <Route path='/customerprofile' element={<CustomerProfile/>} />   
            <Route path='/garagemanagerdash' element={<GarageManagerDash/>} />
            <Route path='/appointmenthistory' element={<AppointmentHistory/>} /> 
            <Route path='/agentappointment' element={<AgentAppointment/>} /> 
            <Route path='/customerprofile' element={<CustomerProfile/>} /> 
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/customersignup" element={<Customersignup />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/show-service" element={<ShowService />} />
        <Route path="/search" element={<ClientSearch />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
          <Route path="/progresssupervisor" element={<Progresssupervisor />} />
          <Route path="/adminGarage" element={<Admindashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/staffsignin" element={<Staffsignin />} />
          <Route path="/user" element={<User />} />
          <Route path="/show-report" element={<ClientReport />} />
          <Route path="/create-service" element={<CreateListin />} />
          <Route path="/show-cart/:listingId" element={<ShowCart />} />

         
        </Route>



        <Route  element={<PrivateRoute />} >
           <Route path="/user" element={<User />} />
        </Route>

        <Route  element={<PrivateRoute />} >
          <Route path="/admindashboard" element={<Admindashboard />} />
        </Route>

        <Route  element={<PrivateRoute />} >
        <Route path="/repairdashboard" element={<Repairdashboard />} />

        </Route>

        <Route  element={<PrivateRoute />} >
        <Route path="/repairissue" element={<Repaiissue />} />
       </Route>

       <Route  element={<PrivateRoute />} >
                 <Route path="/view" element={<View />} />
       </Route>

       <Route  element={<PrivateRoute />} >
               <Route path="/view/updateissue/:id" element={<UpdateIssue />} />
       </Route>


       <Route  element={<PrivateRoute />} >
               <Route path="/customerdashboard" element={<Customerdashboard />} />
       </Route>

       <Route path="/customerprofile" element={<Customerprofile />} />

       <Route path="/customerview" element={<Customerview />} />

       <Route path="/requirments" element={<Requiments />} />

       <Route path="/reaction" element={<Customerreaction />} />

       <Route path="/reaction/adddailyupdate/:id" element={<AddDailystatus />} />

       <Route path="/allstatus" element={<AllDailyStatus />} />

       <Route path="/allstatus/dailyupdate/:id" element={<Dailyupdate />} />



       <Route path="/report" element={<Report />} />

       <Route path="/customerdailyupdate" element={<Customerdaliupdate />} />

       <Route path="/updaterequirment" element={<Updaterequirment />} />

       <Route path="/search" element={<Search />} />

       <Route path="/history" element={<History />} />
       <Route path="/cusreport" element={<CustomerReport />} />



       <Route path="/qr" element={<QR />} />

       <Route path="/qrreder" element={<QRScanner />} />



       <Route path="/haryup" element={<HaryUP />} />

       






       

     </Routes>
     </BrowserRouter>
  )

}

//This is first comment
