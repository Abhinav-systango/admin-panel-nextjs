import React from "react";
import { ordersCardData } from "@/utils/customData";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const OrdersDataCarts = () => {
  return (
    <div className="grid grid-cols-12 justify-center gap-4 w-full">
      {ordersCardData.map((item) => {
        return (
          <div className="col-span-12 md:col-span-6 xl:col-span-3  rounded-lg bg-gray-900 shadow-md p-5 w-full">
            <div className="flex gap-4 md:gap-6 md:justify-center">
              <img src={item.image} alt="" className="h-16" />
              <div>
                <p className="text-3xl font-bold">{item.count}</p>
                <p>{item.name}</p>
                <p className="text-xs flex gap-2 items-center">
                  {item.up ? <BiUpArrow className="text-green-500"/> : <BiDownArrow className="text-red-500"/>} 
                  <span>{item.changePercentage}%</span>
                  <span>({item.days} Days)</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersDataCarts;
