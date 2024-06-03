import React from "react";
import "./App.css";
import AdminPanel from "./Pages/AdminPanel";
// import Sidebar2 from "./components/navbar/Sidebar2";
import Sidebar from "./components/navbar/Sidebar";

const App = () => {
  return (
    <div className="overflow-x-hidden"> 
      {/* <Sidebar2 /> */}
      <Sidebar/>
      <AdminPanel />
    </div>
  );
};

export default App;
