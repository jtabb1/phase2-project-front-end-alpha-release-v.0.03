import React from 'react';

const Api =
"https://glorify-the-supreme-god-67d35a.herokuapp.com";
// "http://localhost:4000";

function DataPoint({
  data, 
  datum, 
  dataSeries, 
  onModify, 
  onDelete,
  setData}) {
  
  const { id, ts, val } = datum;

  function handleSubmitModify(evt) {
    evt.preventDefault();

    const tgtId = parseInt(evt.target.id,10);
    const updTs = evt.target.name;
    const input = document.getElementById(`input-${tgtId}`);
    const testVal = input.value;
    if (testVal.length === 0) return;
    const updVal = parseFloat(testVal);

    const updDatum = {
      id: tgtId,
      ts: updTs,
      val: updVal
    }
    fetch(`${Api}/${dataSeries}/${tgtId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updDatum),
    })
    .then((r) => r.json())
    .then(() => {
      const updatedData = data.map((dm) => (
        dm.id === tgtId ? updDatum : dm
      ));
      setData(()=>(updatedData));
      onModify(updDatum);
    });
  }

  function handleDelete() {
    fetch(`${Api}/${dataSeries}/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      const updatedData = data.filter((dm) => dm.id !== id);
      setData(()=>(updatedData));
      onDelete(id);
    });
  }
  
  return (
  <tr>
    
      <td>
        {ts}
      </td>
      <td>
        <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </td>
      <td>
        <form id={id} name={ts} onSubmit={handleSubmitModify}>
          <input
            id={`input-${id}`}
            type="text"
            className="form-control"
            placeholder={val}
            name="val"
            defaultValue={val}
          />
          <button type="submit" 
           className="btn btn-success btn-sm"
          >
            Change
          </button>
        </form>
      </td>
  </tr>);
}

export default DataPoint;