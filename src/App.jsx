import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home"
import { getAllCars } from "./services/cars-service";
import Add from "./components/Add/Add"
import Update from "./components/Update/Update"

function App() {

  let [cars, setCars] = useState([]);

  let [page, setPage] = useState("home")


  const handleCars = async () => {
    let data = await getAllCars();
    setCars(data)
  }

  useEffect(() => {
    handleCars()
  }, []);



  return (
    <>
      {
        page == "home" && <Home cars={cars} page={setPage} />
      }
      {
        page == "new-car" && <Add page={setPage} />
      }
      {
        page == "update-car" && <Update page={setPage} />
      }
    </>
  )
}

export default App;
