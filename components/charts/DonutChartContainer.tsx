"use client";
import { Data } from "plotly.js";
import React, { useRef, useEffect, useState, lazy } from "react";
import Plot from "react-plotly.js";
const DonutChartContainer = ({DonutChartData}: {
  DonutChartData: Data[]
}) => {
  const chartRef = useRef<any>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (chartRef.current) {
        const width = chartRef?.current.offsetWidth;
        setContainerWidth(width);
      }
    };
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const chartWidth = containerWidth; // Limiting chart width to 350px
  const chartHeight = 250;

  return (
      <div
        ref={chartRef}
        className="w-full flex justify-center rounded-lg bg-gray-900 shadow-md"
      >
        <Plot
          data={DonutChartData}
          layout={{
            height: chartHeight,
            width: chartWidth,
            margin: { b: 0, l: 20, t: 0, r: 20, pad: 0 },
            grid: { columns: 3, rows: 1 },
            paper_bgcolor: "rgb(31 41 55 / 1))",
            legend: {
              orientation: "h",
              y: 1,
              font: {
                color: "#fff",
              },
            },
          }}
        />
      </div>
  );
};

export default DonutChartContainer;
