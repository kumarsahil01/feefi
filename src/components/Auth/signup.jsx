import React, { useState } from "react";
import { auth } from "../../config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setphoneno] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container bg-white m-20 mb-80 rounded-xl p-10 lg:w-2/5 ">
      <form onSubmit={signUp}>
        <h1>Welcome</h1>
       
        <div className="flex flex-col m-2 " >
          <label htmlFor="" className="font-bold m-2
          ">Email: </label>
        <input
          type="email"
          className="border border-solid rounded-lg p-1
          "
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        </div>
        
        <div className="flex flex-col m-2
        ">
        <label htmlFor="" className="font-bold m-2"> Password:</label>
        <input
          type="password"
          className="border rounded-xl p-2"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        </div>
        
       <Link to='/registration'>
       <button type="submit " className="border-2 decoration-sky-400 rounded-xl p-1 ml-1 hover:outline-dashed">
          Sign Up
        </button>
       </Link>

        
      </form>
    </div>
  );
};

export default Signup;
