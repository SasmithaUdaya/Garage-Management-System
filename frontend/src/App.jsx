import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CreateListing from "./pages/CreateListing";
import CreatePackage from "./pages/CreatePackage";
import ShowService from "./pages/showService";
import UpdateListing from "./pages/updateListing";
import Header from "./component/Header";
import PrivateRoute from "./component/privateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-service" element={<CreateListing />} />
          <Route path="/create-package" element={<CreatePackage />} />
          <Route path="/show-service" element={<ShowService />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//This is first comment
