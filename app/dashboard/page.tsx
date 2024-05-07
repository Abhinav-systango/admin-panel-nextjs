import DahsboardCharts from "@/components/charts/DahsboardCharts";
import OrdersDataCarts from "@/components/ordersDataCarts/OrdersDataCarts";
import Skeleton from "@/components/skeleton/Skeleton";
import { DummyOrderListDashboardData } from "@/utils/data";
import dynamic from "next/dynamic";
import React from "react";

// client
const DataTable = dynamic(() => import("@/components/datatable/DataTable"), {
  ssr: false,
  loading: () => <Skeleton />,
});

const Dashboard = () => {
  return (
    <div className="">
      <div className="w-full">
        <p className="text-2xl font-semibold mx-5 my-6 md:my-3">Dashboard</p>
      </div>
      <OrdersDataCarts />
      <DahsboardCharts />
      <DataTable
        columns={[
          "name",
          "picture",
          "isUserActive",
          "orderstatus",
          "totalOrderCost",
          "Action",
        ]}
        data={DummyOrderListDashboardData}
        count={10}
      />
    </div>
  );
};

export default Dashboard;
