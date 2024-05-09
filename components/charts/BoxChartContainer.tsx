'use client'
import React, { useEffect, useRef, useState } from 'react';
import Plot from 'react-plotly.js';

const BoxChartContainer = () => {
  // Generating random data for the box plot
  const y = Array.from({ length: 10 }, () => 
    Array.from({ length: 10 }, () => Math.random())
  );
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
  const chartHeight = 350;

  return (
    <div ref={chartRef} className=" h-[350px] w-full flex justify-center rounded-lg bg-gray-900 shadow-md">
      <Plot
        data={Object.keys(y).map((item:any) => ({
          type: 'box',
          y: y[item],
        }))}
        layout={{
          width: chartWidth,                          
          height: chartHeight,
          margin: { t: 60, l: 60, r: 30, b: 80 },
          paper_bgcolor: 'rgba(31, 41, 55, 1)',
          plot_bgcolor: 'rgba(31, 41, 55, 1)',
          title: 'Box Plot', 
          legend: {
            orientation: "h",
            font: {
              color: "#fff",
            },
          },
          xaxis: { title: 'X Axis', color: "#fff"}, 
          yaxis: { title: 'Y Axis', color: '#fff' } 
        }}
      />
    </div>
  );
};

export default BoxChartContainer;
