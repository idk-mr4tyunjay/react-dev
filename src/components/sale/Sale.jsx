import React from "react";
import SalePlot from "./Salechart";
import SaleBar from "./SaleBar";

const Sale = () => {
  return (
    <div className="card stretch-card">
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-between">
            <h4 className="card-title mb-3">Sale Analysis Trend</h4>
          </div>
          <div className="mt-2">
            <div className="d-flex justify-content-between">
              <small>Order Value</small>
              <small>155.5%</small>
            </div>
            <SaleBar data= {190} color= {'rgb(160, 32, 240)'} bgcol= {'rgba(160, 32, 240, 0.5)'}/>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <small>Total Products</small>
              <small>238.2%</small>
            </div>
            <SaleBar data= {100} color= {'rgb(0, 128, 0)'} bgcol= {'rgba(0, 128, 0, 0.5)'} />
          </div>
          <div className="mt-4 mb-5">
            <div className="d-flex justify-content-between">
              <small>Quantity</small>
              <small>23.30%</small>
            </div>
            <SaleBar data= {180} color= {'rgb(255, 165, 0)'} bgcol= {'rgba(255, 165, 0, 0.5)'}  />
          </div>
          <SalePlot />
        </div>
    </div>
  );
};

export default Sale;
