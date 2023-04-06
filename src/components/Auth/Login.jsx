import React, { useState, useEffect } from "react";
import { auth } from "../../config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import {AuthDetails} from '../index'

const Login = () => {
  const Navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [credntial, setcredntial] = useState(null);
  const signIN = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setcredntial(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex">
        <div className="sign-in-container m-20 bg-white rounded-xl  p-5  w-2/5  ">
          <div>
            <form onSubmit={signIN}>
              <h1 className="text-center font-bold m-2 text-gradient shadow-black text-2xl ">
                Log IN
              </h1>
              <div className="flex flex-col  m-4  ">
                <label htmlFor="" className="m-2 font-semibold">
                  Enter Your Email Address:
                </label>
                <input
                  type="email"
                  placeholder="type your email here"
                  className="border p-2 rounded-lg"
                  value={email}
                  onChange={(e) => Setemail(e.target.value)}
                />
              </div>

              <div className="flex flex-col m-4 ">
                <label htmlFor="" className="m-2 font-semibold">
                  Enter Your password
                </label>
                <input
                  type="password"
                  className="border p-2 rounded-lg"
                  placeholder="password"
                  value={password}
                  onChange={(e) => Setpassword(e.target.value)}
                />
              </div>

              
                <button
                  type="submit"
                  className="border rounded-lg m-2 p-2 text-center ml-5 hover:outline-dashed "
                >
                  log In
                </button>
                {credntial?<><AuthDetails/></>:<><p>Credential are wrong Check it again</p></>}
             
            </form>
          </div>
        </div>

        <div
          className="mt-24 rounded-xl
      h-full"
        >
          <img
            src="https://st.depositphotos.com/18722762/51522/v/600/depositphotos_515228814-stock-illustration-online-registration-sign-login-account.jpg"
            alt=""
          />
        </div>
      </div>

      <div className=" m-20 bg-white rounded-xl p-5 w-2/5 text-center">
        <p>New User?</p>
        <Link to="/signup">
          <button className="border rounded-lg  p-2 text-center hover:outline-dashed mt-2 ">
            Sign Up
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
