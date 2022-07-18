import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Country from "../pages/Country/Country";

const listStyle = {
  display: "flex",
  justifyContent: "space-around",
  border: "black solid 1px",
  listStyle: "none",
};

const Navbar = ({ countries }) => {
  function clickEvent(a) {
    navigate("../" + a);
  }
  const navigate = useNavigate();

  const go = useRef();

  const [value, setValue] = useState("");
  const [c, setC] = useState("");
  
  useEffect(() => {
    clickEvent(c);
  }, [c]);

  return (
    <div>
      <ul style={listStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <input
           type="text"
           placeholder="country"
           value={value}
           onChange={(e) => {
            setValue(e.target.value);
          }}
           onClick={(e)=>{
            console.log(e)
            // divListStyle="dis"
            clickEvent(value)
            
           }}
           
           >  </input> */}
          <div>
            select country
            <select
              onChange={(e) => {

                const vv = e.target.value;
                setC(vv);
              }}
            >
              <option ref={go}></option>
              {countries.map((el, i) => (
                <option key={el.code}>{el.name}</option>
              ))}
            </select>
            <button
              onClick={(e) => {
                console.log(e);
                
              }}
            >
              X
            </button>
          </div>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>{/* <Link to="/countries">countries</Link> */}</li>
      </ul>
      <br />
      <form>{/* <input checked>{<Country/>}</input> */}</form>

      <h3>COVID 19 CORONAVIRUS TRACKER</h3>
    </div>
  );
};

export default Navbar;
