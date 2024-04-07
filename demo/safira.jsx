import React from "react";

function Gemstone(props) {
  return (
    <div>
      <p>
        The {props.name} gemstone is a beautiful shade of {props.color} and is{" "}
        {props.rarity}.
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Gemstone Information</h1>
      <Gemstone name="safira" color="blue" rarity="rare" />
    </div>
  );
}

export default App;
