
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import QualityGraph from "./components/QualityGraph/QualityGraph";
import QuantityGraph from "./components/QuantityGraph/QuantityGraph";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

const Api =
"https://glorify-the-supreme-god-67d35a.herokuapp.com";
// "http://localhost:4000";

function App() {

  const [qualityData, setQualityData] = useState(null);
  const [quantityData, setQuantityData] = useState(null);

  useEffect( () => {

    fetch(
      `${Api}/${'qualityData'}`
    )
    .then((r) => r.json())
    .then((da)=>{
      setQualityData(
        da.sort((a,b) => Date.parse(b.ts) - Date.parse(a.ts))
      );
    });

    fetch(
      `${Api}/${'quantityData'}`
    )
    .then((r) => r.json())
    .then((da)=>{
      setQuantityData(
        da.sort((a,b) => Date.parse(b.ts) - Date.parse(a.ts))
      );
    });
  }, []);

  return qualityData !== null ?  (
    <div>
      <NavBar />

        <Switch>

          <Route exact path="/quality">
            <QualityGraph qualityData={qualityData} setQualityData={setQualityData}
            />
          </Route>

          <Route exact path="/quantity">
            <QuantityGraph quantityData={quantityData} setQuantityData={setQuantityData}
            />
          </Route>

          <Route exact path="/">
            <Home qualityData={qualityData} setQualityData={setQualityData}
            />
          </Route>

        </Switch> 
    </div>
  ) : (
    <p>loading ... </p> 
  );
}

export default App;