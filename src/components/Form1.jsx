import React, { useState, useEffect } from "react";
import { database } from "../config";
import { ref, set } from "firebase/database";
import { Navbar, Footer } from ".";

function MyForm() {
  const [studentname, setstudentname] = useState("");
  const [uniqueid, setuniqueid] = useState("");
  const [gender, setgender] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");

  function writeUserData() {
    set(ref(database, "users" + uniqueid), {
      name: studentname,
      email: email,
      username: username,
      gender: gender,
    });
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="  items-center sm:my-16 my-6 sm:px-8 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-white rounded-[20px] box-shadow">
          <form>
            <h1 className=" font-bold text-lg text-center underline">
              Loan Form
            </h1>

            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                Enter your name:
              </label>
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
            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                {" "}
                Phone no:
              </label>
              <input
                type="text"
                placeholder="Enter Your phone no"
                className="border rounded-lg p-1 w-3/5"
                value={uniqueid}
                onChange={(e) => {
                  setuniqueid(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                Email:
              </label>
              <input
                type="text"
                placeholder="Enter Your mail"
                className="border rounded-lg p-1 w-3/5"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              ></input>
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                Loan Amount
              </label>
              <input
                type="number"
                placeholder="Enter Amount"
                className="border rounded-lg p-1 w-3/5"
                value={gender}
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                Tenure:
              </label>
              <input
                type="email"
                className="border rounded-lg p-1 w-3/5"
                placeholder="Enter Tenure in Months"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                Total Obligations:
              </label>
              <input
                type="number"
                className="border rounded-lg p-1 w-3/5"
                placeholder="obligation"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="" className="font-semibold">
                college Name:
              </label>
              <input
                type="text"
                className="border rounded-lg p-1 w-3/5"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>

            <button
              type="submit "
              className="border rounded-lg p-1 m-2 hover:bg-black hover:text-white"
              onClick={writeUserData()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyForm;
