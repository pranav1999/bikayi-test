import React from "react";
import "./Prize.css";

function Prize(props) {


  return (
    <div className="prize">
      <div className="prize-top">
        <h4>{props.year}</h4>
        <h4>{props.category}</h4>
      </div>
      <p id="motivation">{props.motivation}</p>
      <div className="laurates">
        {props.arr.length>0 &&
          props.arr.map((data) =>{
            return(
              <p>{data.firstname}<span>{data.surname}</span></p>
            )
          })
        }
      </div>
    </div>
  );
}

export default Prize;
