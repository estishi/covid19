import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Sort.css";

const Sort = ({mostCountries, time, numberWithCommas }) => {
  const [sorted, setSorted] = useState({});

  const [isSort, setisSort] = useState(false);

  const [c, setC] = useState("");

  function clickEvent(a) {
    navigate("../" + a);
  }
  const navigate = useNavigate();

  function ww() {
    let tosort = mostCountries.sort((a, b) => b[time] - a[time]).slice(0, 5);
    setSorted(tosort);

    setisSort(true);
  }

  useEffect(() => {
    ww();
  }, [mostCountries, time]);
  
  useEffect(() => {
    clickEvent(c);
  }, [c]);
  return (
    <div className="SortDiv">
      <ol>
        {isSort &&
          sorted.map((el, i) => {
           
            return (
              <li
                key={i}
                onClick={() => {
                  setC(el.name);
                }}
                onMouseOver={(e) => {
                  e.target.className = "over";
                }}
                onMouseLeave={(e) => {
                  e.target.className = "";
                }}
              >
                {el.name} - {numberWithCommas(el[time])}
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Sort;
