import React, { useEffect, useRef, useState } from 'react';


import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

export default function AddDailystatus() {

    const { id } = useParams();
  const [formData, setFormData] = useState({
    email: '',
    
  });

  useEffect(() => {
    axios.get(`http://localhost:5173/backend/issues/oneIssue/${id}`)
    .then((res) => {
       setFormData(res.data);
    })
    .catch((error) => {
        console.log(error);
    })

} , [id])
  return (
    <div>

        <p className='text-black'>{formData.email}</p>
    </div>
  )
}
