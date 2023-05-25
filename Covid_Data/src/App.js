import Navbar from "./components/Navbar";
import './App.css';
import { useEffect, useState } from "react";


const App = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {

    const coronaupadate = async () => {
      const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest")
      const jsondata = await response.json();
      setData(jsondata.data.regional);
    }
    coronaupadate();
  }, [])

  return (
    <>
      <Navbar />
      <div className="row">
        {
          Data.map((value) => {
            return (
              <>
                <div className="col-md-4" style={{ width: "18 rem" }}>
                  <div className="card-body mt-5  mx-3 border border-info shadow-lg rounded">
                    <h3 className="card-title mt-1" >Loc: {value.loc}</h3>
                    <h6 className="card-title mt-3">Confirmed Cases Indian : {value.confirmedCasesIndian}</h6>
                    <h6 className="card-title mt-2">Deaths: {value.deaths}</h6>
                    <h6 className="card-title mt-2">Discharged: {value.discharged}</h6>
                    <h6 className="card-title mt-2">Total Confirmed : {value.totalConfirmed}</h6> 
                  </div>
                </div>
              </>
            )

          })}
      </div>
    </>
  )
}
export default App;
