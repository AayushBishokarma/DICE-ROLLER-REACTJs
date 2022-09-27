import React, { useState } from "react";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const refreshDice = () => {
    const randnumbr = Math.floor(Math.random() * 6) + 1
    setDiceNumber(randnumbr)

  }

  return <div>
    <h1>DICE ROLLER GAME</h1>
    <img src={require(`./pictures/${diceNumber}.png`)}></img>
    <br />
    <button onClick={() => refreshDice()} className="btn">ROLL</button>


  </div>

}
export default App;