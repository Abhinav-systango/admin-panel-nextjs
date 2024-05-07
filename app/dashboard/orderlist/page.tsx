import dynamic from "next/dynamic";
import Skeleton from "@/components/skeleton/Skeleton";
import { DummyOrderListData } from "@/utils/data";
const DataTable = dynamic(() => import("@/components/datatable/DataTable"), {
  ssr: false,
  loading: () => <Skeleton />,
});

const OrderList = () => {
  const columns = ["picture", "username", "email", "order_status", "total"];

  return (
    <div>
      <DataTable data={DummyOrderListData} count={10} columns={columns} />
    </div>
  );
};

export default OrderList;
