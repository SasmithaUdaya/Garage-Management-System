import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CreateListing from "./pages/CreateListing";
import ShowService from "./pages/showService";
import UpdateListing from "./pages/updateListing";
import Listing from "./pages/Listing";
import Header from "./component/Header";
import Search from "./pages/search";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Cart from "./pages/Cart";
import PrivateRoute from "./component/privateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-service" element={<CreateListing />} />
          <Route path="/show-service" element={<ShowService />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
          <Route path="/show-report" element={<Report />} />
          <Route path="/show-cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//This is first comment
