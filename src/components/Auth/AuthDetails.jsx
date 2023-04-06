import React ,{useEffect,useState} from 'react'
import {auth} from '../../config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
const AuthDetails = () => {
    const navigate=useNavigate();
    const [authuser,setauthuser]=useState(null);
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setauthuser(user);
            }else{
                setauthuser(null);
            }
        })
    },[])

    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('sign out successful')
        }).catch(error=>console.log(error))
    }
  return (
    <div>
      {authuser?<><p className='m-1 bg-slate-300 rounded-lg p-2'>{`Signed In as ${authuser.email}`}</p><Link to='/'><button className='border rounded-lg p-1 bg-black text-white '>Home Page...</button></Link></>:<p>Signed Out</p>}
    </div>
  )
}

export default AuthDetails
