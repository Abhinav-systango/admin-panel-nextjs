'use client'
import React, { useEffect, useRef, useState } from 'react'
import Plot from 'react-plotly.js'

const LineChartContainer = () => {
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

    
    <div ref={chartRef} className='h-[250px] w-full flex justify-center rounded-lg bg-gray-900 shadow-md'>
        <Plot 
            data={[{
                type: "scatter",
                mode: "lines",
                name: 'AAPL High',
                x: ['mon', 'tue', 'wed', 'thus', 'fri', 'sat'],
                y: [8,5,8,3,4,9],
                labels: ['mon', 'tue', 'wed', 'thus', 'fri', 'sat'],
                line: {color: '#17BECF'},
                fill: 'tonexty'
                
            }

            ]}
            layout={{
                width: chartWidth,
                height: chartHeight,
                margin: {t:30, l:30, r:30, b:30},
                plot_bgcolor: 'rgba(31, 41, 55, 1)',
                paper_bgcolor: 'rgb(31 41 55 / 1))',

            }}
        />

    </div>
  )
}

export default LineChartContainer