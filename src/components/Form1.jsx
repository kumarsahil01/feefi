import React, { useState } from "react";
const handlesubmit = () => {
  alert("form submitted");
};
function MyForm() {
  return (
    <div className="  items-center sm:my-16 my-6 sm:px-8 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <h2 class="text-gradient font-bold shadow-md  text-center p-1 m-2 mb-4">
        Loan Form
      </h2>
      <form className="form" onSubmit={handlesubmit}>
        <div className="p-2 text-white  font-poppins ">
          <label className="">First Name:</label>
          <input
            className="rounded-[10px] ml-2 text-black p-0.5 pl-1 font-semibold "
            type="text"
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>Last Name:</label>
          <input
            type="text"
            className="rounded-[10px] ml-2 text-black p-0.5 pl-1 font-semibold "
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>Email:</label>
          <input
            type="email"
            className="rounded-[10px] font-semibold ml-12 -mt-1 text-black p-0.5 pl-1"
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>Phone No.</label>
          <input
            type="number"
            className="rounded-[10px] font-semibold ml-5 -mt-1 text-black p-0.5 pl-1"
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>
            college 
          </label>
          <input
            type="text"
            className="rounded-[10px] font-semibold ml-10 -mt-1 text-black p-0.5 "
          />
        </div>
        <div className="p-2 text-white  font-poppins ">
          <label>Age:</label>
          <input
            type="number"
            className="rounded-[10px] font-semibold ml-16 -mt-1 text-black p-0.5 pl-1"
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
