import * as React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown bg-slate-600 rounded-lg ml-5 mt-2 p-1 mr-2  ">
      <button onClick={handleOpen} className="text-white">Resources..</button>
      {open ? (
        <div className="flex rounded-lg p-5 absolute 
        width-max top-24 right-12 border-solid z-10 text-white
        w-400
        bg-slate-400 "> 
          <div className="m-2 p-2 rounded-sm bg-slate-700">
            <h1 className="font-sans font-bold p-1">Tools</h1>
            <hr />
            <ul className="menu">
              <li className="menu-item border rounded-md m-1 hover:bg-black">
                <Link to="/emicalulator">Emi Calculator</Link>
              </li>
              
            </ul>
          </div>
          <div className="m-2  p-2">
            <p className="font-sans font-bold ">Loan Guidence</p>
            <hr />
            <ul >
              <Link to='/engineering'><li className="border rounded-lg p-2 hover:bg-black m-1">FOR ENGINEERING STUDENT</li></Link>
              <Link to='/interestrate'> <li className="border rounded-lg p-2 hover:bg-black m-1">INTERERST RATE</li></Link>
              <Link to='/faq'> <li className="border rounded-lg p-2 hover:bg-black m-1">FaQ?</li></Link>   
            
                
            </ul>
          </div>
        </div>
      ) : null}
      
    </div>
  );
};

export default Resources;
