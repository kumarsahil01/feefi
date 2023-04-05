import { useState } from "react";
import styles from "../style";
import {auth} from '../config'
import {  signOut } from 'firebase/auth';
import { FaUserAlt } from "react-icons/fa";

import { close, logo, menu, user } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

//signout function here 


const UserProfile = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const userSignOut=()=>{
    signOut(auth).then(()=>{
        console.log('sign out successful')
    }).catch(error=>console.log(error))
}

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <nav className="w-full flex py-6 justify-between items-center navbar">

        <div className="flex flex-1 justify-end items-center">
          <img
            src={user}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flexrow"
            } p-6 bg-white absolute top-0 right-0 mx-4 my-2    sidebar`}
          >
            <div className="flex">
              <p>Profile</p>
              <p>
                <img
                  src={logo}
                  alt="close menu"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)}
                />
              </p>
            </div>
            <hr></hr>
            <div className="flex">
              <p>user profile pic</p>
              <div>
                <p>Name of the user</p>
                <p>email of the user</p>
              </div>
            </div>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {/* {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-indigo-300 " ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`${nav.path}`}>{nav.title}</Link>
                </li>
              ))} */}
              <li>
                Apply for loans
              </li>
              <li>
                Registration/Applications
              </li>
              <li>
                <p>change profile</p>
              </li>
              <li>
                Job assistance
              </li>
              
              <li className="font-poppins font-medium cursor-pointer text-[16px] hover:text-indigo-300 ">
                <button onClick={userSignOut}>Logout</button>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserProfile;
