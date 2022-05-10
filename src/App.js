import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="app">
      <Header/>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/checkout" element={ <Checkout/> }/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
