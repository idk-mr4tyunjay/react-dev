import React from "react";
import EventChart from "./EventChart";

const Events = () => {
  return (
    <div className="card stretch-card">
      <div className="card-body mx-4 px-5">
        <h5 className="card-title mb-4">Events</h5>
        <div className="d-flex justify-content-between mb-3 px-1">
          <div className="small">Critical</div>
          <div className="text-danger small">Error</div>
          <div className="text-warning small">Warning</div>
        </div>
        <div>
          <EventChart />
        </div>
      </div>
    </div>
  );
};

export default Events;
