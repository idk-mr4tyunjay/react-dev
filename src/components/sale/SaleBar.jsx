import React, { useEffect, useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

const SaleBar = ({ data, color, bgcol }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      const progressChart = new Chart(ctx, {
        type: 'bar', 
        data: {
          labels: ['Progress'], 
          datasets: [{
            data: [data], 
            backgroundColor: [color], 
            borderColor: [bgcol], 
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true, 
              max: 256, 
              display: false 
            },
            y: {
              display: false
            }
          },
          plugins: {
            legend: {
              display: false 
            },
            tooltip: {
              enabled: false 
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });

      return () => {
        progressChart.destroy();
      };
    }
  }, [data]); 

  return (
    <div 
      style={{
        position: 'relative', 
        height: '10px', 
        width: '100%', 
        backgroundColor: 'rgba(200, 200, 200, 0.8)', 
        borderRadius: '5px', 
        overflow: 'hidden'
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%' 
        }} 
      />
    </div>
  );
};

export default SaleBar;
