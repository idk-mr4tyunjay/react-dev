import React, { useEffect, useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

const ProgressBar = ({ value }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Progress'], 
          datasets: [{
            data: [value], 
            backgroundColor: 'rgba(76, 175, 80, 0.8)', 
            borderColor: 'rgba(76, 175, 80, 1)', 
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y', 
          scales: {
            x: {
              beginAtZero: true, 
              max: 356, 
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
  }, [value]); 

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

export default ProgressBar;
