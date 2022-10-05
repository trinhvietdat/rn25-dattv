import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <header>The Pulpit Rock</header>
          <div className="col">
            <p className="cot1 p-4">The Drive</p>
            <p className="cot1 p-4">The Walk</p>
            <p className="cot1 p-4">The Return</p>
            <p className="cot1 p-4">The End</p>
          </div>
          <div className="col">
            <h1>The walk</h1>
            <a>The texxt</a>
            <img src="https://a.cdn-hotels.com/gdcs/production36/d997/c1674b8b-1d04-4c86-8833-ad4672653154.jpg?impolicy=fcrop&w=800&h=533&q=medium"></img>
          </div>
          <div className="back_color" >
            <h1>What</h1>
            <h1>Where</h1>
            <h1>Prive</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
