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
  setData,
  isDisabled
}) {
  
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
      window.location.reload();
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
      window.location.reload();
    });
  }
  
  return (
  <tr>
    
      {/* <td>
      </td>
      <td>
      </td> */}
      <td className="align-middle">
        <div className="container align-middle">
          <div className="row align-middle">
            <div className="col align-middle">
              <span className="align-middle">{ts}</span>
            </div>
            <div className="col">
              <form id={id} name={ts} onSubmit={handleSubmitModify}>
                <input
                  id={`input-${id}`}
                  type="number"
                  step="any"
                  className=""
                  placeholder={val}
                  name="val"
                  defaultValue={val}
                />

                <div>
                <button 
                  type="button" 
                  disabled={isDisabled}
                  className="btn btn-danger btn-sm" 
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button type="submit" 
                className="btn btn-primary btn-sm"
                >
                  Change
                </button>
                </div>

              </form>
            </div>
        </div>
        </div>
      </td>
  </tr>);
}

export default DataPoint;