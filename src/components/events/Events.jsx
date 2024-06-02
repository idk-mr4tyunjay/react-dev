import React from "react";
import EventChart from "./EventChart";

const Events = () => {
  return (
    <div className="col-xl-3 d-flex grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Events</h5>
          <div className="d-flex justify-content-between mb-md-5 mt-3">
            <div className="small">Critical</div>
            <div className="text-danger small">Error</div>
            <div className="text-warning small">Warning</div>
          </div>
          <div>
            <EventChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
