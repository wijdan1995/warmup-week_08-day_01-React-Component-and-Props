import React from "react";

const House = props => {
  //console.log(props.info);
  return (
    <dvi className="card">
      <h2>{props.info.houseName}</h2>
      <img src={props.info.imgSrc} />
      <p>Founder: {props.info.founder} </p>
      <p>Element: Water</p>
    </dvi>
  );
};

export default House;
