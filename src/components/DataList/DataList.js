import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataPoint from "../DataPoint/DataPoint";
// import ResetData from "../ResetData/ResetData";
import './DataList.css';

function DataList({ 
  data, 
  dataSeries, 
  setData, 
  onCreate, 
  onModify, 
  onDelete,
  activeMode
}) {

    // function onReset() {}

    const isDisabled = data.length<2 ? true : false;
    // console.log(isDisabled);

    const dataRows = data.map( dm => (
        <DataPoint key={uuidv4()} 
          data = {data}
          datum={dm} 
          dataSeries={dataSeries}
          onModify={onModify} 
          onDelete={onDelete}
          setData={setData}
          isDisabled={isDisabled}
        />
    ));

    let hideOrShow = "";
    if (activeMode==="Home") {
      hideOrShow = "hide-me";
    }

    let dependentVariableName = "Tasks Per Hour";
    if (dataSeries==="qualityData") {
      dependentVariableName ="DPMO (Defects Per Million Opportunities)";
    }
  
    return (
      <div 
        id="DataList"
        className={`container my-4 ${hideOrShow}`}
      >

        <div className="row">
          <h3 className="text-center">Delete Or Change The Data:</h3>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      Date
                    </div>
                    <div className="col">
                      {dependentVariableName}
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{dataRows}</tbody>
        </table>

        {/* <ResetData 
          data={data} 
          dataSeries={dataSeries} 
          onReset={onReset} 
          setData={setData} 
          onDelete={onDelete} 
          onCreate={onCreate} 
          onModify={onModify} 
        /> */}
      </div>
    );
  }

export default DataList;