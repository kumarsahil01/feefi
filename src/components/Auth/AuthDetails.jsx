import React ,{useEffect,useState} from 'react'
import {auth} from '../../config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
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
      {authuser?<><p>{`Signed In as ${authuser.email}`}</p><button  onClick={userSignOut}>Sign Out</button></>:<p>Signed Out</p>}
    </div>
  )
}

export default AuthDetails
