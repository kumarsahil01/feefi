import React,{useId, useState} from 'react'
import {database} from './config'
import {ref,set} from 'firebase/database'
import { collection, addDoc } from "firebase/firestore"; 
import { Navbar,Footer } from "../src/components/index";

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

    <>
    <Navbar/>
    <div className="  items-center sm:my-16 my-6 sm:px-8 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-white rounded-[20px] box-shadow">
      

      <form>

        <h1 className=" font-bold text-lg text-center underline">Complete Your Profile</h1>

      <div className="flex flex-col m-2">
        <label htmlFor="" className="font-semibold">Enter your name:</label>
      <input
          type="text"
          className="border rounded-lg p-1 w-3/5"
          placeholder="Enter your complete Name "
          value={studentname}
          onChange={(e) => {
            setstudentname(e.target.value);
          }}
        ></input>
      </div>
       <div  className="flex flex-col m-2">
       <label htmlFor="" className="font-semibold">Enter Unique id:</label>
       <input
          type="text"
          placeholder="enter your unique id"
          className="border rounded-lg p-1 w-3/5"
          value={uniqueid}
          onChange={(e) => {
            setuniqueid(e.target.value);
          }}
        ></input>
       </div>
       <div className="flex flex-col m-2">
       <label htmlFor="" className="font-semibold">User Name:</label>
        <input
          type="text"
          placeholder="User Name"
          className="border rounded-lg p-1 w-3/5"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
       </div>

        

       <div className="flex flex-col m-2">
       <label htmlFor="" className="font-semibold">Gender:</label>
       <input
          type="text"
          placeholder="Gender"
          className="border rounded-lg p-1 w-3/5"
          value={gender}
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>
       </div>
       <div className="flex flex-col m-2">
       <label htmlFor="" className="font-semibold">Email:</label>
       <input
          type="email"
          className="border rounded-lg p-1 w-3/5"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
       </div>
        

        <button type="submit " className="border rounded-lg p-1 m-2 hover:bg-black hover:text-white" onClick={writeUserData()}>
          complete profile
        </button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Profile
