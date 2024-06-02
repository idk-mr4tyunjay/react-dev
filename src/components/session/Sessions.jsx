import React from "react";
import CircleProgress from "./CircleProgress";

const Sessions = () => {
  return (
    <div className="card col-xl-3 d-flex grid-margin stretch-card">
      <h5 className="card-title mb-3 py-1">Sessions</h5>
      <div className="d-flex flex-row align-items-center justify-content-between">
        {/* Use flex-row to align items horizontally */}
        <div className="card-body d-flex align-items-center">
          {/* Use flex utilities to align content */}
          {/* Limit the size of CircleProgress */}
          <CircleProgress percentage={75} />
        </div>
        <div>
          <ul className="session-by-channel-legend px-2">
            <li className="d-flex justify-content-between">
              <div className="px-2">Firewalls</div>
              <div >4(100%)</div>
            </li>
            <li className="d-flex justify-content-between">
              <div className="px-2">Ports</div>
              <div>12(100%)</div>
            </li>
            <li className="d-flex justify-content-between">
              <div className="px-2">Servers</div>
              <div>2(100%)</div>
            </li>
            <li className="d-flex justify-content-between">
              <div className="px-2">Firewalls</div>
              <div>7(100%)</div>
            </li>
            <li className="d-flex justify-content-between">
              <div className="px-2">Firewalls</div>
              <div>6(70%)</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
