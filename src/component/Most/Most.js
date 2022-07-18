import React,{useState, useEffect} from 'react'
// import { useParams, useNavigate } from "react-router-dom";
import Sort from '../Sort/Sort';
import "./Most.css"




const Most = ({countries, numberWithCommas}) => {
    // const params = useParams();
    console.log(countries);
    const [mostCountries, setMostCountries] = useState({});
    const [minco, setMinco] = useState([]);
    const [tt, setTt] = useState([]);
    const [aa, setAa] = useState(['todayDeaths',"todayConfirmed","lastDeaths","lastConfirmed"]);
    // console.log(aa[0]);
    const key=['todayDeaths',"todayConfirmed","lastDeaths","lastConfirmed"]
    const title=["Most deaths - today","Most deaths - all time", "Most confirmed - today","Most deaths - all time"]


    // const incident =["deaths", "confirmed"]
    // const time=["today","latest_data"]
    // console.log(time[0]);
    // let today = countries.today
    // let last= countries.latest_data

    // useEffect(()=>{},[])
     function sortBy() {
     setMinco(countries.map((el)=>
        // console.log(el);
        // console.log(el.today);
        ({  name:el.name,
            todayDeaths:el.today.deaths,
            lastDeaths:el.latest_data.deaths,
            todayConfirmed:el.today.confirmed,
            lastConfirmed:el.latest_data.confirmed,
        } )
    ))
    // el.time[1].map(()=>{})
}
    console.log(minco);

    // async function s (){
    //      let todayD = minco.sort((a,b)=>
    //      a.todayDeaths-b.todayDeaths).reverse().slice(0,5)
    //      setTt(todayD)
    //      console.log(tt);
    //      let lastD = minco.sort((a,b)=>
    //      a.lastDeaths-b.lastDeaths).reverse().slice(0,5)
    //      let todayC = minco.sort((a,b)=>
    //      a.todayConfirmed-b.todayConfirmed).reverse().slice(0,5)
    //      let lastC = minco.sort((a,b)=>
    //      a.lastConfirmed-b.lastConfirmed).reverse().slice(0,5)
    //      setMostCountries( {...!mostCountries,todayD,lastD,todayC,lastC})
    //      console.log(mostCountries);
         
    //     //  sit.map((el,i)=>{
    //     // })
    // }


//    let min2= minco.sort((a,b)=>
//     a.ld-b.ld
//     )
//     console.log(min2);
//     let min2r=min2.reverse()
//     console.log(min2r);

    
    useEffect(()=>{
        sortBy()
        

    },[countries])
    useEffect(()=>{
        // s()
        

    },[minco])


  return (
    <div className='most'>most

        {key.map((el,i)=>{
            return <div className='mostCard'>
                <h3>{title[i]}</h3>
                <Sort minco={minco} time={el} numberWithCommas={numberWithCommas}/>

            </div>
        })}


    
        {/* <div className='mostCard'>
            <h3>Most deaths - today</h3>
             */}
          
        {/* 
            <Sort minco={minco} time="todayDeaths" numberWithCommas={numberWithCommas}/>
        </div>
        <div className='mostCard'>
            <h3>Most deaths - all time</h3>
            <Sort minco={minco} time="lastDeaths" numberWithCommas={numberWithCommas}/>

            
        </div>
        <div className='mostCard'>
            <h3>Most confirmed - today</h3>
            <Sort minco={minco} time="todayConfirmed" numberWithCommas={numberWithCommas}/>

        </div>
        <div className='mostCard'>
            <h3>Most deaths - all time</h3>
            <Sort minco={minco} time="lastConfirmed" numberWithCommas={numberWithCommas}/>

        </div> */}
    </div>
  )
}

export default Most