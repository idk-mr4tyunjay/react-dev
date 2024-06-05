import React from "react";
import SalePlot from "./Salechart";
import SaleBar from "./SaleBar";

const metrics = [
  { label: "Order Value", data: 190, color: "rgb(160, 32, 240)", bgcol: "rgba(160, 32, 240, 0.5)" },
  { label: "Total Products", data: 100, color: "rgb(0, 128, 0)", bgcol: "rgba(0, 128, 0, 0.5)" },
  { label: "Quantity", data: 180, color: "rgb(255, 165, 0)", bgcol: "rgba(255, 165, 0, 0.5)" }
];
const Sale = () => {
  return (
    <div className="card stretch-card">
        <div className="card-body mx-5 px-4">
          <div className="d-flex flex-wrap justify-content-between">
            <h4 className="card-title mb-3">Sale Analysis Trend</h4>
          </div>
          {metrics.map(({ label, data, color, bgcol }, index) => (
          <div className="mt-2" key={index}>
            <div className="d-flex justify-content-between">
              <small className="py-2">{label}</small>
              <small className="py-2">{data}%</small>
            </div>
            <SaleBar data={data} color={color} bgcol={bgcol} />
          </div>
        ))}
<div className="pt-5">
            <SalePlot/>
  
</div>        </div>
    </div>
  );
};

export default Sale;
