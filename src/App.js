// import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from "react-router-dom"
// import { useParams, useMatch, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios"
import React, {useEffect, useState} from "react";


import Navbar from './component/Navbar';
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Country from "./pages/Country/Country";
import NotFound from "./component/NotFound";


function App() {
  function numberWithCommas(x) {
    return ( x?.toString())?.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  }

  const [countries , setCountries]=useState([])
  useEffect(()=>{

    async function fetchData() {
        const URL = ` https://corona-api.com/countries`;
        // if (countries === "") return;

        const { data } = await axios.get(URL);
        console.log(data); 
        // let all=[]   
      setCountries (data.data)
            
    }
    fetchData();
}
,[]
)
// console.log(countries)



  return (
    <div className='App'>
      {/* <BrowserRouter> */}
      <Router>
        <Navbar countries={countries} />
        <Routes>
          <Route path='/' element= {<Home countries={countries} numberWithCommas={numberWithCommas}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/:country" element={<Country countries={countries} numberWithCommas={numberWithCommas}/>} />
          <Route path="*" element={<NotFound/>}/>



        </Routes>
      </Router>
      {/* </BrowserRouter> */}

      
      
   </div>
  );
}

export default App;
