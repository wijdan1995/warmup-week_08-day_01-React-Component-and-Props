import React from "react";//JSX

const Character = props => (
  <div className="card">
    <h2>{props.info.notableCharacter.charName}</h2>
    <img src={props.info.notableCharacter.imgSrc} />
    <p>{props.info.houseName}</p>
  </div>
);

export default Character;
