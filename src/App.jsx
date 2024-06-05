import React from "react";
import "./App.css";
import AdminPanel from "./Pages/AdminPanel";
import Sidebar from "./components/navbar/Sidebar";

const App = () => {
  return (
    <div className="">
      <Sidebar>
        <AdminPanel />
      </Sidebar>
    </div>
  );
};

export default App;
