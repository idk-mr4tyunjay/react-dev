import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sessions from "../components/session/Sessions";
import Events from "../components/events/Events";
import Sale from "../components/sale/Sale";
import Device from "../components/deviceStats/Device";
import ProjectStatus from "../components/projectStatus/ProjectStatus";

const AdminPanel = () => {
  return (
    <div className="w-100 bg-custom">
      <div className="">
        <Navbar />
      </div>
      <div className="d-flex row">
        <div className="d-flex responsive justify-content-around">
          <Sessions />
          <Events />
          <Device />
        </div>
        <div className="p-3 mb-2 bg-white z-index-5">
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
