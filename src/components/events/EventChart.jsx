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
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
          datasets: [
            {
              label: 'ARA A',
              data: [35, 59, 32, 69, 43, 62, 37, 59, 31],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(128, 0, 128, 1)', 
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              borderWidth: 1,
              pointRadius: 0 
            },
            {
              label: 'ARA B',
              data: [25, 50, 21, 57, 37, 55, 26, 52, 21],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(255, 0, 0, 1)', 
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              borderWidth: 1,
              pointRadius: 0 
            },
            {
              label: 'ARA C',
              data: [15, 40, 12, 47, 22, 43, 13, 40, 12],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(255, 190, 0, 1)', 
              backgroundColor: 'rgba(255, 190, 0, 0.2)',
              borderWidth: 1,
              pointRadius: 0 
            }
          ]
        },
        options: {
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
            }
          },
          plugins: {
            legend: {
              display: false, 
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
