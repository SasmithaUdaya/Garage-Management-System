
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';


import Hearder from './components/Header';

import Customer from './pages/Customer';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Customersignup from './pages/Customersignup';
import PrivateRoute from './components/PrivateRoute';
import Staffsignin from './pages/Staffsignin';

import Mechanic from './pages/Mechanic';
import Assign from './pages/Assign';

import ChangeAssignment from './pages/ChangeAssignment';
import CreateAccident from './pages/CreateAccident';
import ViewAccident from './pages/ViewAccident';
import AccidentReport from './pages/AccidentReport';
import Request from './pages/Request';
import FindMechanic from './pages/FindMechanic';

export default function App() {
  return (
    <BrowserRouter>

    <Hearder/>
     <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        
        <Route  element={<PrivateRoute />} >
         <Route path="/signup" element={<Signup/>} />
        </Route>
        <Route  element={<PrivateRoute />} >
           <Route path="/customer" element={<Customer />} />
        </Route>
        
        <Route path="/customersignup" element={<Customersignup />} />

        <Route  element={<PrivateRoute />} >
           <Route path="/staffsignin" element={<Staffsignin />} />
        </Route>

           <Route path="/mechanic" element={<Mechanic />} />
    
           <Route path="/assign" element={<Assign />} />
       
           <Route path="/viewacc/change/:id" element={<ChangeAssignment />} />
  
           <Route path="/createacc" element={<CreateAccident />} />
 
           <Route path="/viewacc" element={<ViewAccident />} />
 
           <Route path="/find" element={<FindMechanic />} />
           <Route path="/accreport" element={<AccidentReport />} />

           <Route path="/request" element={<Request />} />
   
     </Routes>
     </BrowserRouter>
  )
}

//This is first comment
