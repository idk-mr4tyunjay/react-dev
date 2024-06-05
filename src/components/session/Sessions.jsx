import React from "react";
import CircleProgress from "./CircleProgress";
import { GoDot } from "react-icons/go";
const data = [
  { label: "Firewalls", value: "4(100%)" },
  { label: "Ports", value: "12(100%)" },
  { label: "Servers", value: "2(100%)" },
  { label: "Firewalls", value: "7(100%)" },
  { label: "Firewalls", value: "6(70%)" },
];

const Sessions = () => {
  return (
    <div className="card stretch-card ">
      <h5 className="card-title p-2">Sessions</h5>
      <div className="d-flex align-items-center px-5 pb-3">
        <div className="card-body d-flex align-items-center">
          <CircleProgress percentage={75} />
        </div>
        <ul className="session-by-channel-legend px-3 mb-0">
          {data.map((item, index) => (
            <li key={index} className="d-flex justify-content-between mb-1">
              <div className="pe-5">
              <GoDot  className="text-primary me-2" />
                {item.label}</div>
              <div>{item.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sessions;
