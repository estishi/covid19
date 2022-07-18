import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Country.css";

import axios from "axios";

const Country = ({ numberWithCommas, countries }) => {
  const countryName = useParams().country;
  // console.log("cv",countries);
  const isCountry = countries.filter((el) => el.name === countryName)[0];

  // const{latest_data,today, name,population}=isCountry
  // console.log({latest_data,today, name,population});

  // const [a, b] = useState([]);

  // useEffect(() => {}, []);

  return (
    <div>
      Country
      <h3>{countryName}</h3>
      <hr />
      <table className="countryTable">
        <tbody>
          <tr>
            <td>
              {" "}
              <h4>ALL DEATHS</h4>
              <h5>{numberWithCommas(isCountry?.latest_data.deaths)}</h5>
            </td>
            <td>
              <h4>TODAY CONFIRMED</h4>
              <h5>{numberWithCommas(isCountry?.today.confirmed)}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>CRITICAL</h4>
              <h5>{numberWithCommas(isCountry?.latest_data.critical)}</h5>
            </td>
            <td>
              <h4>ACTIVE</h4>
              <h5>{numberWithCommas(isCountry?.latest_data.confirmed)}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>RECOVERED</h4>
              <h5>{numberWithCommas(isCountry?.latest_data.recovered)}</h5>
            </td>
            <td>
              {" "}
              <h4>CASES PER MILLION</h4>
              <h5>
                {numberWithCommas(
                  isCountry?.latest_data.calculated.cases_per_million_population
                )}
              </h5>
            </td>
          </tr>
        </tbody>
      </table>
      {/* { countries.map((el)=>
   <div key={el}>{el}<br/></div>)} */}
    </div>
  );
};

export default Country;
