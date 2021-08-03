import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DataPrep from "./components/DataPrep/DataPrep";
// import QualityGraph from "./components/QualityGraph/QualityGraph";
// import QuantityGraph from "./components/QuantityGraph/QuantityGraph";
// import Home from "./components/Home/Home";
// import CreateForm from "./components/CreateForm/CreateForm";
// import DataList from './components/DataList/DataList';

const Api = 
"https://glorify-the-supreme-god-67d35a.herokuapp.com";
// "http://localhost:4000";

function App() {

  // eslint-disable-next-line
  const [isFromApp, setIsFromApp] = useState(true);
  const [activeMode, setActiveMode] = useState("Home");
  const [forcedRedraw, setForcedRedraw] = useState(0);

  const [dataSeries, setDataSeries] = useState("null")
  const [qualityData, setQualityData] = useState(null);
  const [quantityData, setQuantityData] = useState(null);
  const [data, setData] = useState(null);

  // function onSetData(dataType) {
  //   switch(dataType) {
  //     case "qualityData":
  //       setData(qualityData);
  //       break;
  //     case "quantityData":
  //       setData(quantityData);
  //       break;
  //     default:
  //   }
  // }
  function onSetData() {
    
  }

  function onCreate() {
    setForcedRedraw((ps) => (ps+1));
  }

  useEffect( () => {

    fetch(
      `${Api}/${'qualityData'}`
    )
    .then((r) => r.json())
    .then((da)=>{
      // console.log(da);
      setQualityData(
        da.sort((a,b) => Date.parse(b.ts) - Date.parse(a.ts))
      );
      // console.log(da);
    });

    fetch(
      `${Api}/${'quantityData'}`
    )
    .then((r) => r.json())
    .then((da)=>{
      // console.log(da);
      setQuantityData(
        da.sort((a,b) => Date.parse(b.ts) - Date.parse(a.ts))
      );
      // console.log(da);
    });
  }, []);

  // console.log("THIS IS dataSeries:");
  // console.log(dataSeries);

  return   (
    <div>
      {/* <NavBar /> */}

      <header class="navbar bg-light sticky-top p-0 shadow">
        <div class="container">
          <div class="row">
          <NavBar />
    
          <Switch>

            <Route exact path="/quality">
              <DataPrep
                isFromApp={isFromApp} 
                component={"D3LineGraph"} 
                dataSeriesDemand={"qualityData"} 
                dataSeries={dataSeries} 
                setDataSeries={setDataSeries} 
                qualityData={qualityData} 
                setQualityData={setQualityData}
                quantityData={quantityData} 
                setQuantityData={setQuantityData}
                data={data} 
                onSetData={onSetData} 
                setData={setData}
                activeMode={activeMode} 
                setActiveMode={setActiveMode}
                forcedRedraw={forcedRedraw}
                setForcedRedraw={setForcedRedraw}
                onCreate={onCreate}
              />
              {/* <QualityGraph qualityData={qualityData} setQualityData={setQualityData}
              /> */}
            </Route>

            <Route exact path="/quantity">
              <DataPrep
                isFromApp={isFromApp} 
                component={"D3LineGraph"} 
                dataSeriesDemand={"quantityData"} 
                dataSeries={dataSeries} 
                setDataSeries={setDataSeries} 
                qualityData={qualityData} 
                setQualityData={setQualityData} 
                quantityData={quantityData} 
                setQuantityData={setQuantityData} 
                data={data} 
                onSetData={onSetData} 
                setData={setData}
                activeMode={activeMode} 
                setActiveMode={setActiveMode}
                forcedRedraw={forcedRedraw}
                setForcedRedraw={setForcedRedraw}
                onCreate={onCreate}
                  />
              {/* <QuantityGraph quantityData={quantityData} setQuantityData={setQuantityData}
              /> */}
            </Route>

            <Route exact path="/">
              <DataPrep
                isFromApp={isFromApp} 
                component={"Home"}
                dataSeriesDemand={""} 
                dataSeries={dataSeries} 
                setDataSeries={setDataSeries} 
                qualityData={qualityData} 
                setQualityData={setQualityData}
                quantityData={quantityData} 
                setQuantityData={setQuantityData}
                data={data} 
                onSetData={onSetData} 
                setData={setData}
                activeMode={activeMode} 
                setActiveMode={setActiveMode}
                forcedRedraw={forcedRedraw}
                setForcedRedraw={setForcedRedraw}
                onCreate={onCreate}
                  />
              {/* <Home /> */}
            </Route>

          </Switch>

          </div>
        </div>
      </header>

      {/* { (!homeId) ? ( */}
      <DataPrep
        isFromApp={isFromApp} 
        component={"CreateForm"} 
        dataSeriesDemand={null} 
        dataSeries={dataSeries} 
        setDataSeries={setDataSeries} 
        qualityData={qualityData} 
        setQualityData={setQualityData} 
        quantityData={quantityData} 
        setQuantityData={setQuantityData} 
        data={data} 
        onSetData={onSetData} 
        setData={setData}
        activeMode={activeMode} 
        setActiveMode={setActiveMode}
        forcedRedraw={forcedRedraw}
        setForcedRedraw={setForcedRedraw}
        onCreate={onCreate}
      />
      {/* ) : (<div></div>)} could I do null here or <></> ? */}
      <DataPrep 
        isFromApp={isFromApp} 
        component={"DataList"} 
        dataSeriesDemand={null} 
        dataSeries={dataSeries} 
        setDataSeries={setDataSeries} 
        qualityData={qualityData} 
        setQualityData={setQualityData} 
        quantityData={quantityData} 
        setQuantityData={setQuantityData} 
        data={data} 
        onSetData={onSetData} 
        setData={setData} 
        activeMode={activeMode} 
        setActiveMode={setActiveMode}
        forcedRedraw={forcedRedraw}
        setForcedRedraw={setForcedRedraw}
        onCreate={onCreate}
      />
      {/* <CreateForm 
        data={data} 
        dataSeries={dataSeries} 
        onCreate={onCreate} 
        onSetData={onSetData} 
      />
      <DataList 
        data={data} 
        dataSeries={dataSeries}
        onDelete={onDelete}
        onModify={onModify}
        onSetData={onSetData}
      /> */}
    </div>
  );
}

export default App;