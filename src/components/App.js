import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";

function Clickable() {
  function handleClick() {
    console.log("click");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  return (
    <div>
      <h3>onClick</h3>
      <Tickler />
      <hr />

      <MultiButton />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
      <h3>clicked</h3>
      <Clickable/>
    </div>
  );
}

export default App;
