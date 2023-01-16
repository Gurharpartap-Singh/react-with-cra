import logo from './logo.svg';
import './App.css';

import React, { Component, useState} from "react";
import "./App.css";

function App(){

  const [index,setIndex]=useState(0)
  console.log("Re rendered")
  function handleClick(){
    setIndex(index+1);
  }
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input ></input>
    </>
  )
}
export default App;


