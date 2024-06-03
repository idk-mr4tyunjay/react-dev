import React, { useEffect, useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary elements for the bar chart
Chart.register(BarElement, CategoryScale, LinearScale);

const ProgressBar = ({ value }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Create a new Chart instance
      const progressChart = new Chart(ctx, {
        type: 'bar', // Set the chart type to 'bar'
        data: {
          labels: ['Progress'], // Single label for the progress bar
          datasets: [{
            data: [value], // The progress value
            backgroundColor: 'rgba(76, 175, 80, 0.8)', // Green color
            borderColor: 'rgba(76, 175, 80, 1)', // Border color
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y', // Horizontal bar
          scales: {
            x: {
              beginAtZero: true, // Start the bar from zero
              max: 356, // Maximum value for the bar
              display: false // Hide the scale
            },
            y: {
              display: false // Hide the scale
            }
          },
          plugins: {
            legend: {
              display: false // Hide the legend
            },
            tooltip: {
              enabled: false // Disable tooltips
            }
          },
          responsive: true,
          maintainAspectRatio: false // Maintain the aspect ratio
        }
      });

      // Cleanup function to destroy chart instance on unmount
      return () => {
        progressChart.destroy();
      };
    }
  }, [value]); // Re-run effect if 'value' changes

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
