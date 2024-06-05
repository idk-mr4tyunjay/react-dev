import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SaleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Feb 1",
            " ",
            " ",
            " ",
            " ",
            " ",
            "Feb 11",
            " ",
            " ",
            " ",
            " ",
            " ",
            "Feb 21",
            " ",
            " ",
            " ",
            " ",
            " ",
            "Mar 3",
            " ",
            " ",
            " ",
            " ",
            " ",
          ],
          datasets: [
            {
              label: "ARA A",
              data: [
                100, 82, 73, 79, 86, 71, 86, 78, 86, 75, 60, 58, 49, 59, 54, 49,
                64, 57, 65, 90, 56, 72, 65, 74,
              ],
              fill: true,
              tension: 0.1,
              borderColor: "rgba(255, 0, 128, 1)",
              backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                  return null;
                }

                const gradient = ctx.createLinearGradient(
                  0,
                  chartArea.top,
                  0,
                  chartArea.bottom
                );
                gradient.addColorStop(1, "rgba(255, 0, 128, 0.1)");
                gradient.addColorStop(0, "rgba(255, 0, 128, 1)");
                return gradient;
              },
              borderWidth: 3,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.1)",
              },
              ticks: {
                display: false,
              },
            },
            xAxes: [
              {
                grid: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)",
                  borderWidth: 1,
                  borderColor: "rgba(0, 0, 0, 0.1)",
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} id="myChart" />;
};

export default SaleChart;
