import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import Sort from "../Sort/Sort";
import "./Most.css";

const Most = ({ countries, numberWithCommas }) => {
  // const params = useParams();
  const [mostCountries, setMostCountries] = useState([]);
  const [minParameter, setMinParameter] = useState([]);

  const key = ["todayDeaths", "todayConfirmed", "lastDeaths", "lastConfirmed"];
  const title = [
    "Most deaths - today",
    "Most deaths - all time",
    "Most confirmed - today",
    "Most deaths - all time",
  ];

  
  function sortBy() {
    setMostCountries(
      countries.map((el) =>
        ({
          name: el.name,
          todayDeaths: el.today.deaths,
          lastDeaths: el.latest_data.deaths,
          todayConfirmed: el.today.confirmed,
          lastConfirmed: el.latest_data.confirmed,
        })
      )
    );
  }


  useEffect(() => {
    sortBy();
  }, [countries]);
;

  return (
    <div className="most">
      most
      {key.map((el, i) => {
        return (
          <div key={i} className="mostCard">
            <h3>{title[i]}</h3>
            <Sort mostCountries={mostCountries} time={el} numberWithCommas={numberWithCommas} />
          </div>
        );
      })}
    </div>
  );
};

export default Most;
