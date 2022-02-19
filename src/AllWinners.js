import { useState, useEffect } from "react";
import Prize from "./Prize";
import "./AllWinners.css";

function AllWinners() {
  const API = "https://api.nobelprize.org/v1/prize.json";
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

  var prizeyear = [];
  for(let i=1900;i<=2018;i++){
    prizeyear.push(i);
  }

  var domains = ["chemistry","economics","litrature","peace","physics","medicine"]



  return (
    <div className="allWinners">
      <h1>All Winners</h1>
      <div className="allWinner-data">
        <div className="filters">
          <select name="year" id="prizeyear">
              <option value="">Choose Year</option>
              {
                prizeyear.map((data)=>{
                  return(
                    <option key={data} value={data}>{data}</option>
                  )
                })
              }
          </select>
          <select name="domain" id="prizedomain">
              <option value="">Choose Domain</option>
              {
                domains.map((data)=>{
                  return(
                    <option key={data} value={data}>{data}</option>
                  )
                })
              }
          </select>
        </div>
        {Data.length > 0 &&
          Data.map(({ year, category, overallMotivation, laureates }) => {
            return (
              <Prize
                key={year + category}
                year={year}
                category={category}
                motivation={overallMotivation}
                arr={laureates !== undefined && laureates}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AllWinners;
