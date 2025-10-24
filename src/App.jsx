import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Details from "./components/Details";
const App = () => {
  return (
  <div className="h-screen w-screen bg-red-100 flex">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
  </div>
  );
}
export default App;
