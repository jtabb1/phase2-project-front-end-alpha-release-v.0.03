import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home({ setActiveMode }) {

  // let g01aWidthScaling = "0.9";
  // let g01aHeightScaling = "0.4";
  // let vptW = window.innerWidth;
  // let vptH = window.innerHeight;
  // let g01aW = +g01aWidthScaling * vptW;
  // let g01aH = +g01aHeightScaling * vptH;

  //  //
  //
  // console.log(" ");
  // console.log("The home component is called.")
  // console.log(" ");
  
  setActiveMode("Home");

  return (
    <div 
      id="home" 
      className="row"
    >
      <br />
      <h1>Data To Graph:</h1>
      <p className="">
        You now have the ability to graph important 
        business metrics on the go.
      </p>
      <p>
        Choose your metric:
      </p>
      <h3><Link to="/quality">Quality</Link></h3>
      <h3><Link to="/quantity">Quantity</Link></h3>
    </div>
  )
}

export default Home;

/*
      className="row p-3 w-75 overflow-auto"

/* */