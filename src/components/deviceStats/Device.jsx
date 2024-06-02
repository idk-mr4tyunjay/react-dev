import React from "react";
import ProgressBar from "./ProgressBar";

const Device = () => {
  return (
    <div className="col-xl-4 d-flex grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between">
            <h5 className="card-title mb-2">Device Stats</h5>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <DeviceInfo label="Uptime" value="195 Days, 8 hours" />
              <DeviceInfo label="First Seen" value="23 Sep 2019, 2.04PM" />
              <DeviceInfo label="Collected Time" value="23 Sep 2019, 2.04PM" />
              <DeviceInfo label="Memory Space" value="168.3GB" />
              <div className="mt-4">
                <ProgressBar value={168.3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeviceInfo = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-4 px-2">
    <div>{label}</div>
    <div className="text-muted px-4">{value}</div>
  </div>
);

export default Device;
