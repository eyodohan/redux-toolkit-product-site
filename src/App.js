import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductContainer />
    </div>
  );
}

export default App;
