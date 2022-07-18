import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";

import "./Sort.css"

const Sort = ({minco, time, numberWithCommas}) => {
  
    const[sorted, setSorted]=useState({})
    

    const [isSort, setisSort] = useState(false);

    const [c, setC] = useState("");

    function clickEvent(a){
      navigate("../" + a)}
      const navigate = useNavigate();

    
     function ww(){
      
      console.log(time)
      let tosort = minco.sort((a,b)=>
         b[time]-a[time]).slice(0,5);
         setSorted(tosort)
         
         setisSort(true)
        }
        console.log(sorted);
        
        useEffect(()=>{
          ww()

    },[minco,time])
    // useEffect(() => {
    //   setisSort(true)
    // }, [sorted]);
    useEffect(()=>{
      console.log("c",c);
      clickEvent(c)
    },[c])
  return (
    
    <div className='SortDiv'>
      
      <ol>
        {isSort&&
        sorted.map((el, i )=>{
          console.log(el.name);
          console.log(numberWithCommas(el[time]));
          // setC(el.name)

          return<li
          key={i}
           onClick={()=>{setC(el.name)}} 
           onMouseOver={(e) => {
            e.target.className = "over";
          }}
          onMouseLeave={(e) => {
            e.target.className = "";
          }}
          >{el.name} - {numberWithCommas(el[time])}</li>

        })}
      </ol>

    </div>
  )
}

export default Sort