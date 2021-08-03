import React, { useState } from 'react';

const Api =
"https://glorify-the-supreme-god-67d35a.herokuapp.com";
// "http://localhost:4000";

function CreateForm({ data, dataSeries, onCreate, setData }) {
  const [formData, setFormData] = useState({
    ts: "",
    val: 0
  });

  function handleTsChange(event) {
    setFormData({
      ...formData, 
      ts: event.target.value,
    });
  }

  function handleValChange(event) {
    setFormData({
      ...formData,
      val: parseFloat(event.target.value),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const testDatum = { ...formData}; // <- do i need this?

    fetch(`${Api}/${dataSeries}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testDatum), // revert to formData to see if it still works; set this to a new variable name if nec.
    })
    .then((r) => r.json())
    .then((newDatum) => {
      setData(()=>([newDatum, ...data]));
      onCreate(newDatum);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container my-3">

        <div className="row">
          <h3 className="text-center">Enter new data below:</h3>
        </div>

        <div className="row">

          <div className="col-4">
            <input
              id="ts"
              type="date"
              className="form-control"
              placeholder="Enter Date"
              name="ts"
              value={formData.ts}
              onChange={handleTsChange}
            />
          </div>

          <div className="col-4">
            <input
              id="val"
              type="text"
              className="form-control"
              placeholder="Enter Data Value"
              name="val"
              value={formData.val}
              onChange={handleValChange}
            />
          </div>

          <div className="col-4">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>

        </div>

      </div>
    </form>
  );
}

export default CreateForm;