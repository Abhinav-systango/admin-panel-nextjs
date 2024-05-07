import React, { useEffect, useRef, useState } from 'react'

const BarChartContainer = () => {
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

            <div>BarChartContainer</div>
        </div>
  )
}

export default BarChartContainer