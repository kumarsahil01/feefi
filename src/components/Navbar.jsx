import { useState,useEffect } from "react";
import styles from "../style";
import {auth} from '../config'
import { onAuthStateChanged, signOut } from 'firebase/auth';


import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { UserProfile } from "../components";



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [authuser,setauthuser]=useState(null);
  // auth user function 
  useEffect(()=>{
    const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
            setauthuser(user);
        }else{
            setauthuser(null);
        }
    })
  },[]);


  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-indigo-300  ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`${nav.path}`}>{nav.title}</Link>
              {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
            </li>
          ))}
          {/* <button
            type="button"
            className="py-2 px-3 font-poppins font-medium text-[18px] text-white   rounded-[10px]  mt-4 border-2 border-white hover:border-indigo-300 "
          >
            Resources
          </button> */}
          {authuser===null?<Link to='/registration'><p><button className="text-white">Login</button></p></Link>:<UserProfile />}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-indigo-300 " ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`${nav.path}`}>{nav.title}</Link>
                </li>
              ))}

              {/* <button
                type="button"
                className="py-2 px-3 font-poppins font-medium text-[18px] text-white   rounded-[10px]  mt-4 border-2 border-white hover:border-indigo-300 "
              >
                Resources
              </button> */}
              console.log('thsi sudgfseiulg')
              {authuser===null?<p>this is login page</p>:<UserProfile />}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
