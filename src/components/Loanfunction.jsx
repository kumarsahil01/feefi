import React, { useEffect, useState } from "react";
import { auth } from "../config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Loanfunction = () => {
  const navigate = useNavigate();
  const [authuser, setauthuser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthuser(user);
      } else {
        setauthuser(null);
      }
    });
  }, []);
  return (
    <div className="">
      {authuser ? (
        <p>thiis is loan page</p>
      ) : (
        <p>{navigate("/resources")}</p>
      )}
    </div>
  );
};

export default Loanfunction;
