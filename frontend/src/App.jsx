import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

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
import User from "./components/User";

// Ishini's Imports
import AdminFeedBacks from "./pages/SupportPages/Home";
import CreateFeedback from "./pages/SupportPages/CreateFeedback";
import EditFeedback from "./pages/SupportPages/EditFeedback";
import DeleteFeedback from "./pages/SupportPages/DeleteFeedback";
import ShowFeedback from "./pages/SupportPages/ShowFeedback";
import CreateFAQ from "./pages/SupportPages/CreateFAQ";
import RealHome from "./pages/SupportPages/RealHome";
import FAQs from "./pages/SupportPages/FAQs";
import Report from "./pages/SupportPages/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Hearder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />

        <Route element={<PrivateRoute />}>
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/about" element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path="/progresssupervisor" element={<Progresssupervisor />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/employee" element={<Employee />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/customer" element={<Customer />} />
        </Route>

        <Route path="/customersignup" element={<Customersignup />} />

        <Route element={<PrivateRoute />}>
          <Route path="/staffsignin" element={<Staffsignin />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>

        {/* Ishinis's Routings */}
        {/* <Route path="/Home" element={<RealHome />} /> */}
        <Route path="/feedback/create" element={<CreateFeedback />} />
        <Route path="/faqs" element={<FAQs />} />

        <Route path="/faq/create" element={<CreateFAQ />} />
        <Route path="/adminFeeds" element={<AdminFeedBacks />} />
        <Route path="/report" element={<Report />} />
        <Route path="/feedback/details/:id" element={<ShowFeedback />} />
        <Route path="/feedback/edit/:id" element={<EditFeedback />} />
        <Route path="/feedback/delete/:id" element={<DeleteFeedback />} />
      </Routes>

      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

//This is first comment
