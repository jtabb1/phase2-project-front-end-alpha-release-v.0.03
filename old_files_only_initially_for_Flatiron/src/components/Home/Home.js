import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
      <div className="container m-4">
        <h1>Explore Your Data:</h1>
        <h3>Choose either <Link to="/quality">Quality</Link>, or <Link to="/quantity">Quantity</Link></h3>.
      </div>
    )
  }
  
  export default Home;