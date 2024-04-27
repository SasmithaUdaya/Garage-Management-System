import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Hearder from "./components/Header";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import Progresssupervisor from "./pages/Progresssupervisor";
import Customer from "./pages/Customer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Customersignup from "./pages/Customersignup";
import PrivateRoute from "./components/PrivateRoute";
import Staffsignin from "./pages/Staffsignin";
import AdminDashboard from "./pages/services/AdminDashboard";
import CreateListin from './pages/services/CreateListing';
import Listing from './pages/services/Listing';
import UpdateListing from './pages/services/updateListing';
import ShowService from "./pages/services/showService";
import User from "./components/User";
import ClientReport from './pages/services/ClientReport';
import ClientSearch from './pages/services/ClientSearch';

export default function App() {
  return (
    <BrowserRouter>
      <Hearder />
      <Routes>
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
          <Route path="/adminGarage" element={<AdminDashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/staffsignin" element={<Staffsignin />} />
          <Route path="/user" element={<User />} />
          <Route path="/show-report" element={<ClientReport />} />
          <Route path="/create-service" element={<CreateListin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//This is first comment
