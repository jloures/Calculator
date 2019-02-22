import React from "react";
//importing the styles for the entire app here
//the app is pretty simple, hence only one style file
import "../styles.css";
//import containers
import Keypad from "../containers/Keypad";
import Display from "../containers/Display";
import Result from "../containers/Result";

const App = () => (
  <div className="App">
    <Display />
    <Result />
    <Keypad />
  </div>
);

export default App;
