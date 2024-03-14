import{BrowserRouter,Routes, Route}from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Employee from './pages/Employee';
import Admin from './pages/Admin';



export default function App(){

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/employee" element={<Employee />} />
    <Route path="/admin" element={<Admin />} />
    
  
</Routes>

  </BrowserRouter>
  )
}