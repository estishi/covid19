import React,{useState,useEffect, useRef} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Country from '../Country/Country';
import Most from '../../component/Most/Most'
import axios from 'axios';
import './Home.css'




const Home = ({numberWithCommas, countries}) => {
  // const location = useLocation();
  // const navigate = useNavigate();

  console.log(countries);

  const [today, setToday]=useState({})
  const data=["deaths", "confirmed"]
  const time=["today","all time"]
  useEffect(() => {
    async function fetchData(){
      const URL="https://corona-api.com/timeline"
      const {data}=await axios.get(URL)
      const today=data.data[0]
      console.log(data.data[0]);
      setToday(today)
    }
    fetchData()
  },[])

  return (
    <div>
      <table className='homeTable'>
      <tbody>
      <tr>
        <td colSpan="4">TOTAL CASES <br/>{numberWithCommas(today.confirmed)} </td>
      </tr>
      <tr>
      <td>DEATHS <br/>{numberWithCommas(today.deaths)}</td>
      <td>RECOVERED <br/>{numberWithCommas(today.recovered)}</td>
      <td>NEW CASES <br/>{numberWithCommas(today.new_confirmed)}</td>
      <td>NEW DEATHS <br/>{numberWithCommas(today.new_deaths)}</td>
      </tr>
      </tbody>
    </table>
      <Most countries={countries} numberWithCommas={numberWithCommas}/>

    </div>
  )
}

export default Home