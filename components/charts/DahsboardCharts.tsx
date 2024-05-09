import React, { Suspense, lazy } from "react";
import { Data } from "plotly.js";
import Skeleton from "../skeleton/Skeleton";
import dynamic from "next/dynamic";

const DonutChartContainer = dynamic(() => import("./DonutChartContainer"), {
  ssr: false,
  loading: () => <Skeleton />,
});
const LineChartContainer = dynamic(() => import("./LineChartContainer"), {
  ssr: false,
  loading: () => <Skeleton />,
});

const BoxChartContainer = dynamic(() => import("./BoxChartContainer"), {
  ssr: false,
  loading: () => <Skeleton />,
});


const DonutChartData: Data[] = [
  {
    type: "pie",
    values: [81, 19],
    hole: 0.5,
    domain: { column: 0 },
    textinfo: "none",
    labels: ["Total orders", "none"],
    title: { text: "81%", font: { color: "#fff" } },
    marker: {
      colors: ["#FF5B5B", "rgba(255, 91, 91, 0.15)"],
    },
  },
  {
    type: "pie",
    values: [22, 78],
    hole: 0.5,
    domain: { column: 1 },
    textinfo: "none",
    labels: ["Customers", "none"],
    marker: {
      colors: ["#00B074", "rgba(0, 176, 116, 0.15)"],
    },
    title: { text: "22%", font: { color: "#fff" } },
  },
  {
    type: "pie",
    values: [62, 38],
    hole: 0.5,
    domain: { column: 2 },
    textinfo: "none",
    labels: ["Revenue", "none"],
    marker: {
      colors: ["#2D9CDB", "rgba(45, 156, 219, 0.15)"],
    },
    title: { text: "62%", font: { color: "#fff" } },
  },
];

const DahsboardCharts = () => {
  return (
    <div className="grid grid-cols-12 gap-3  mt-5">
      <div className="col-span-12 md:col-span-6">
        <DonutChartContainer DonutChartData={DonutChartData} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <LineChartContainer />
      </div>
      <div className="col-span-12 ">
        <BoxChartContainer />
      </div>
    </div>
  );
};

export default DahsboardCharts;
