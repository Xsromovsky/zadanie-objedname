import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import OrderView from "./components/OrderView";

function App() {
  return (
    <div className="w-screen h-screen bg-[#00132d] text-white">
      <Navbar />
      <div className="flex justify-center mt-2">
        <OrderView/>
      </div>
    </div>
  );
}

export default App;
