import { useState } from "react";
import styles from "../style";
import { auth } from "../config";
import { signOut } from "firebase/auth";
import { FaUserAlt } from "react-icons/fa";
import { getDatabase,ref,onValue } from "firebase/database";


import { close, logo, menu, profile,Cross } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

//signout function here

const UserProfile = () => {
  
  const [toggle, setToggle] = useState(false);
  const [user,setuser]=useState([]);


  var data;
  const db=getDatabase();
  const userdataref=ref(db,'usersm01')
  onValue(userdataref,(snapshot)=>{
     data=snapshot.val();
     
     console.log(data)
  })
// setuser(data)

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className="flex flex-1 justify-end items-center">
          <img
            src={profile}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flexrow"
            } p-6 bg-white absolute top-0 right-0 mx-4 my-2 z-10    bg-black-gradient min-w-[140px] rounded-xl sidebar`}
          >
            <div className="flex">
              <p className="font-bold text-white">Profile</p>
              <p className="absolute right-8">
                <img
                  src={Cross}
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
                <p></p>
                <p>email of the user</p>
              </div>
            </div>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              
              <Link to="/loan">
                <li className=" border rounded-lg text-white p-1 hover:bg-black font-poppins m-1">Apply for loans</li>
              </Link>


              <Link to="/profile">
                <li className=" border rounded-lg text-white p-1 hover:bg-black font-poppins m-1">
                  <p>change profile</p>
                </li>
              </Link>

              <Link to="/job">
                <li className=" border rounded-lg text-white p-1 hover:bg-black font-poppins m-1">Job assistance</li>
              </Link>

              <button className=" border rounded-lg text-white p-1 hover:bg-black font-poppins m-1" onClick={userSignOut}>Logout</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserProfile;
