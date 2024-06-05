import React from "react";
import Sessions from "../components/session/Sessions";
import Events from "../components/events/Events";
import Sale from "../components/sale/Sale";
import Device from "../components/deviceStats/Device";
import ProjectStatus from "../components/projectStatus/ProjectStatus";
import Navbar from "../components/navbar/Navbar";

const AdminPanel = () => {
  return (
    <div className="w-100 bg-custom">
              <Navbar />
      <div className="d-flex row my-3">
        <div className="d-flex responsive justify-content-around">  
          <Sessions />
          <Events />
          <Device />
        </div>
        <div className="d-flex responsive justify-content-around">
          <Sale />
          <ProjectStatus />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
