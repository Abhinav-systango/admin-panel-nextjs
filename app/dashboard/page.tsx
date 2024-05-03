import Cart from "@/components/card/Cart";
import OrdersDataCarts from "@/components/ordersDataCarts/OrdersDataCarts";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full">
        <p className="text-2xl font-semibold mx-5 my-6 md:my-3">Dashboard</p>
      </div>
        <OrdersDataCarts />

    </div>
  );
};

export default Dashboard;
