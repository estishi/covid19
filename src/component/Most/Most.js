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

  // const incident =["deaths", "confirmed"]
  // const time=["today","latest_data"]
  // console.log(time[0]);
  // let today = countries.today
  // let last= countries.latest_data

  // useEffect(()=>{},[])
  function sortBy() {
    setMostCountries(
      countries.map((el) =>
        // console.log(el);
        // console.log(el.today);
        ({
          name: el.name,
          todayDeaths: el.today.deaths,
          lastDeaths: el.latest_data.deaths,
          todayConfirmed: el.today.confirmed,
          lastConfirmed: el.latest_data.confirmed,
        })
      )
    );
    // el.time[1].map(()=>{})
  }

  //     //  sit.map((el,i)=>{
  //     // })
  // }

  //    let min2= mostCountries.sort((a,b)=>
  //     a.ld-b.ld
  //     )
  //     console.log(min2);
  //     let min2r=min2.reverse()
  //     console.log(min2r);

  useEffect(() => {
    sortBy();
  }, [countries]);
//   useEffect(() => {
//     s()
//   }, [mostCountries]);

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
