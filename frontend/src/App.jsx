import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import SignIn from '../src/pages/Signin'
import SignUp from '../src/pages/Signup';
import About from '../src/pages/About';
import Profile from '../src/pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

//This is first comment
