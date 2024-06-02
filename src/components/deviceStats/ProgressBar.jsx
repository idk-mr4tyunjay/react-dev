import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register required controllers (including the 'bar' controller)
Chart.register(...registerables);

const ProgressBar = ({ value }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const progressChart = new Chart(ctx, {
        type: 'bar', // Use 'bar' chart type
        data: {
          labels: ['Memory'],
          datasets: [{
            data: [value], // Use 'value' for filled part
            backgroundColor: 'rgba(76, 175, 80, 0.8)', // Green for filled part
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y', // Make the bar horizontal
          scales: {
            x: {
              beginAtZero: true, // Start from zero
              max: 256, // Maximum value for the bar
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
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
        progressChart.destroy(); // Cleanup on component unmount
      };
    }
  }, [value]); // Re-render chart when 'value' changes

  return (
    <div style={{ position: 'relative', height: '20px', width: '100%', backgroundColor: 'rgba(200, 200, 200, 0.8)', borderRadius: '5px', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} />
    </div>
  ); // Canvas element for the chart with background for unfilled part
};

export default ProgressBar;
