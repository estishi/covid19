import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Country from "../Country/Country";
import Most from "../../component/Most/Most";
import axios from "axios";
import "./Home.css";

const Home = ({ numberWithCommas, countries }) => {
  // const location = useLocation();
  // const navigate = useNavigate();

  console.log(countries);

  const [today, setToday] = useState({});

  const title = ["DEATHS", "RECOVERED", "NEW CASES", "NEW DEATHS"];
  const keys = ["deaths", "recovered", "new_confirmed", "new_deaths"];
  useEffect(() => {
    async function fetchData() {
      const URL = "https://corona-api.com/timeline";
      const { data } = await axios.get(URL);
      const today = data.data[0];
      setToday(today);
    }
    fetchData();
  }, []);

  return (
    <div>
      <table className="homeTable">
        <tbody>
          <tr>
            <td colSpan="4">
              TOTAL CASES <br />
              {numberWithCommas(today.confirmed)}{" "}
            </td>
          </tr>
          <tr>
            {title.map((el, i) => {
              return (
                <td key={i}>
                  {el}
                  <br />
                  {numberWithCommas(today[keys[i]])}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <Most countries={countries} numberWithCommas={numberWithCommas} />
    </div>
  );
};

export default Home;
