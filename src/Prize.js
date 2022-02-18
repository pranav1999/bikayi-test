import React from "react";
import "./Prize.css";

function Prize(props) {


  return (
    <div className="prize">
      <div className="prize-top">
        <h4>{props.year}</h4>
        <h4>{props.category.toUpperCase()}</h4>
      </div>
      <p id="motivation">{props.motivation}</p>
      <div className="laurates">
        {props.arr.length>0 &&
          props.arr.map((data) =>{
            return(
              <div key={data.id}>
              <p id="name">{data.firstname} <span>{data.surname}</span></p>
              <p id="motivation">{data.motivation}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Prize;
