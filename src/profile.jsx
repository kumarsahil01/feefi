import React,{useId, useState} from 'react'
import {database} from './config'
import {ref,set} from 'firebase/database'
import { collection, addDoc } from "firebase/firestore"; 

const Profile = () => {
    const [studentname,setstudentname] =useState('');
    const [uniqueid,setuniqueid]=useState('');
    const [gender, setgender] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");

    //function to write data to data base
    function writeUserData  (){

        set(ref(database, 'users'+uniqueid ), {
           name:studentname,
          email:email,
          username:username,
          gender:gender
        });
      }

  return (


    
    <div className="user data collection form">
      <form >
        <h1>complete your profile</h1>
       
        <input
          type="text"
          placeholder="Enter your complete Name "
         value={studentname}
          onChange={(e) => {setstudentname(e.target.value)}}
        ></input>

        <input
        type='text'
        placeholder='enter your unique id'
        value={uniqueid}
        onChange={(e)=>{setuniqueid(e.target.value)}}
        >
        </input>

        

     <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => {setusername(e.target.value)}}
        ></input>
        
        <input
          type="text"
          placeholder="Gender"
         value={gender}
          onChange={(e) => {setgender(e.target.value)}}
        ></input>
        <input
          type="email"
          placeholder="Enter your email"
       value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        ></input>
        

        

        <button type="submit " className="text-white" onClick={writeUserData()}>
          complete profile
        </button>
      </form>
    </div>
  )
}

export default Profile
