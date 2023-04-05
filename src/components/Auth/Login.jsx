import React ,{useState,useEffect} from 'react'
import {auth} from '../../config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate=useNavigate();
    const [email,Setemail]=useState("");
    const [password,Setpassword]=useState('');
    const [credntial,setcredntial]=useState(null)
    const signIN=(e)=>{
       e.preventDefault();
       signInWithEmailAndPassword(auth,email,password)
       .then((userCredential)=>{
        setcredntial(userCredential)
       })
       .catch((error)=>{
        console.log(error)
       })
       
    }

  return (
    <div className='sign-in-container m-20'>
      <form  onSubmit={signIN} >
        <h1>Log IN</h1>
        <input type="email" placeholder='type your email here'  value={email} onChange={(e)=>Setemail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>Setpassword(e.target.value)} />
        <button type='submit' className='text-white'> log In</button>
      </form>
     
    </div>
  )
}

export default Login
