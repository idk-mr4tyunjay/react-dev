import React from "react";
import CircleProgress from "./CircleProgress";

const Sessions = () => {
  return (
    <div className="card stretch-card">
      <h5 className="card-title p-3">Sessions</h5>
      <div className="d-flex align-items-center">
        <div className="card-body d-flex align-items-center">
          <CircleProgress percentage={75} />
        </div>
        <ul className="session-by-channel-legend px-2 mb-0">
          <li className="d-flex justify-content-between mb-1">
            <div>Firewalls</div>
            <div>4(100%)</div>
          </li>
          <li className="d-flex justify-content-between mb-1">
            <div>Ports</div>
            <div>12(100%)</div>
          </li>
          <li className="d-flex justify-content-between mb-1">
            <div>Servers</div>
            <div>2(100%)</div>
          </li>
          <li className="d-flex justify-content-between mb-1">
            <div>Firewalls</div>
            <div>7(100%)</div>
          </li>
          <li className="d-flex justify-content-between mb-1">
            <div>Firewalls</div>
            <div>6(70%)</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sessions;
