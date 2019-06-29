import React from 'react';
import './App.css';//link the file of style App.css
import houses from "./Houses"; //Link file of data
import House from "./House"; //Link file of House component
import Character from "./Character"; //Link file of Character


//React
//component
//Props => attr or props properities 'props'
// we use 'Props' often to pass the data to components


let allHouses = houses.map(house => <House info={house} />);

const App = () => (
  <div>
    <h1>Houses</h1>
    {houses.map((house, index) => (
      <House info={house} key={index} />
    ))}
    <h1>Characters</h1>
    {houses.map((house, index) => (
      <Character info={house} key={index} />
    ))}
    
  </div>
);



export default App;
