import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EventChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'ARA A',
              data: [25, 59, 40, 81, 56, 55, 40],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(128, 0, 128, 1)', // Purple
              backgroundColor: 'rgba(128, 0, 128, 0.2)', // Purple with transparency
              borderWidth: 1,
              pointRadius: 0 // Remove the points
            },
            {
              label: 'ARA B',
              data: [20, 49, 35, 71, 46, 45, 30],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(255, 0, 0, 1)', // Red
              backgroundColor: 'rgba(255, 0, 0, 0.2)', // Red with transparency
              borderWidth: 1,
              pointRadius: 0 // Remove the points
            },
            {
              label: 'ARA C',
              data: [15, 40, 15, 51, 26, 25, 10],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(255, 190, 0, 1)', // Orange
              backgroundColor: 'rgba(255, 190, 0, 0.3)', // Orange with transparency
              borderWidth: 1,
              pointRadius: 0 // Remove the points
            }
          ]
        },
        options: {
          scales: {
            x: {
              display: false // Hide the x-axis labels
            },
            y: {
              display: false // Hide the y-axis labels
            }
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        }
      });

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} id="myChart" />;
};

export default EventChart;
