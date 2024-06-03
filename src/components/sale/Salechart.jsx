import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SaleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Feb 1'," ", " "," ",'Feb 11', " "," "," ",'Feb 21'," ", " ",  " ",'Mar 3'],
          datasets: [
            {
              label: 'ARA A',
              data: [100, 59, 40, 81, 56, 55, 40, 75, 60, 75, 60, 58,25, 59, 40, 50, 34, 43, 23, 90],
              fill: true,
              tension: 0.1,
              borderColor: 'rgba(255, 0, 128, 1)', // Purple
              backgroundColor: 'rgba(255, 0, 128, 0.5)', // Purple with transparency
              borderWidth: 1,
              pointRadius: 0 // Remove the points
            }
          ]
        },
        options: {
          scales: {
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

export default SaleChart;
