import { useState, useEffect } from "react";
import Prize from "./Prize";
import "./AllWinners.css";

function AllWinners() {

  const API = "http://api.nobelprize.org/v1/prize.json";
  const [Data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(API); 
      const d = await res.json();
      const s = d.prizes;
      setData(s);
      console.log(s); //  
    };
    get();
  }, []);


  return (
    <div className="allWinners">
      <h1>All Winners</h1>
      <div className="allWinner-data">
        {Data.length>0 && Data.map(({year,category,laureates})=>{
          return(
            <div>
            <Prize
            key={year+category}
            year = {year}
            category = {category}
            motivation = "We will find some motivation and will always win this game."
            arr = {laureates!==undefined && laureates} 
            />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AllWinners;
