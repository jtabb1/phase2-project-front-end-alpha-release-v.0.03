import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataPoint from "../DataPoint/DataPoint";

function DataList({ data, dataSeries, onModify, onDelete, setData}) {

    const dataRows = data.map( dm => (
        <DataPoint key={uuidv4()} 
          data = {data}
          datum={dm} 
          dataSeries={dataSeries}
          onModify={onModify} 
          onDelete={onDelete}
          setData={setData}
        />
    ));

    return (
      <div className="container my-4">

        <div className="row">
          <h3 className="text-center">Delete or Change the data:</h3>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
              <th scope="col">Tasks Per Hour</th>
            </tr>
          </thead>
          <tbody>{dataRows}</tbody>
        </table>
      </div>
    );
  }

export default DataList;