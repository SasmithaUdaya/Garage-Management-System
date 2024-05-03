import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux' ;
import { signInStart ,signInSuccess ,signInFailure} from '../redux/user/userSlice' ;
import OAuth from '../components/OAuth';


import b1 from '../Image/s5.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '500px',
  };

export default function Signin() {

    const [formData ,setFormData] = useState({});
    
    const { loading ,error } = useSelector((state) => state.user) ;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      
      });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();

      

        try{
          dispatch(signInStart()) ;

        const res = await fetch('backend/customer/signin',
        {
            method:'POST',
            headers: {
            'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);

        if(data.success === false){
            dispatch(signInFailure(data.message)) ;
          return;
        }
        dispatch(signInSuccess(data)) ;

        const email = formData.email;
        if(email == 'staff@gmail.com'){//password = 12345
          navigate('/staffsignin');
        }else{

                  navigate('/');

        }

          
        }
        catch(error){

          dispatch(signInFailure(error.message)) ;
        }
        
    };
    console.log(formData);


  return (
   
    <div  style={styles}>
 <div className='p-3 max-w-lg mx-auto' >
    <h1 className='text-3xl text-center font-semibold my-7 text-yellow-700'>Sign In</h1> 

    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

     <input type='email' placeholder='Email' className='border bg-slate-300 p-3 rounded-lg' id='email'onChange={handleChange} />
     <input type='password' placeholder='Password' className='border bg-slate-300 p-3 rounded-lg' id='password' onChange={handleChange}/>


     <button disabled ={loading} className='font-bold bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70'>
      {loading ? 'Loading...' : 'Sign In'}
      </button>
      <OAuth/>

    </form>
    <div className='flex gap-2 mt-5 text-green-500'>
     <p>Don't have an account?</p>
     <Link to={"/customersignup"}>
     <span className='text-red-700 '>Sign up</span>
     </Link>
    </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}
 </div>
 </div>
)
}
