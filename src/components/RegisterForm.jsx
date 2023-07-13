import './style.css'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const auth = getAuth();
  const handleSubmit = () =>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   alert("gege")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <>
    <div>
      <div className="auth-card shadow p-5 rounded" style={{ width:'18rem' }}>
        <h1 className='mb-3'>Register</h1>
        <p className='text-muted'>Create Your Account To Get Access!</p>
        <input onChange={(e)=>setEmail(e.target.value)} className='regInput w-100' type="email" placeholder='email'/>
        <input onChange={(e)=>setPassword(e.target.value)}  className='regInput mt-2 mb-2 w-100' type="password" placeholder='password'/>
        <button className='btn btn-primary w-100' onClick={handleSubmit()}>Register</button>
      </div>
    </div>
  
    </>
  );
}

export default RegisterForm;