
import './App.css';
import { useState } from 'react';

function App() {

  const data = [

    { district: "Ariyalur", unions: ["Jayankondam", "Ariyalur"] },

    { district: "Chengalpattu", unions: ["Tambaram", "Chengalpattu"] },

    { district: "Chennai", unions: ["Tondiarpet", "Ambattur", "Chennai"] },

    { district: "Coimbatore", unions: ["Peelamedu", "Gandhipuram", "Coimbatore"] },

    { district: "Cuddalore", unions: ["Neyveli", "Cuddalore"] },

  ]

  const [value, setValue] = useState()
  const [show, setShow] = useState(false)
  return (
    <div className="App" style={{ marginTop: "150px" }}>
      <select style={{ marginRight: "1em" }} onChange={(e) => { setValue(e.target.value); setShow(true) }}>
        {
          data.map((ele, ind) => {
            return (
              <option value={ind}>{ele.district}</option>
            )
          })
        }
      </select>

      {show ? (
        <select>
          {
            data[value]?.unions.map((ele) => {
              return (
                <option>{ele}</option>
              )
            })
          }
        </select>
      ) : null}
    </div>

  );

}

export default App;
