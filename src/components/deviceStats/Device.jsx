import React from "react";
import ProgressBar from "./ProgressBar";

const Device = () => {
  return (
      <div className="card stretch-card">
        <div className="card-body">
          <h5 className="card-title mb-2">Device Stats</h5>
         <div className=" px-2 py-3 mb-3">
            <DeviceInfo label="Uptime" value="195 Days, 8 hours" />
            <DeviceInfo label="First Seen" value="23 Sep 2019, 2.04PM" />
            <DeviceInfo label="Collected Time" value="23 Sep 2019, 2.04PM" />
            <DeviceInfo label="Memory Space" value="168.3GB" />
         </div>
          <div className="mt-4">
            <ProgressBar value={168.3} />
          </div>
        </div>
      </div>
  );
};

const DeviceInfo = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-2 px-2">
    <div>{label}</div>
    <div className="text-muted px-2">{value}</div>
  </div>
);

export default Device;
