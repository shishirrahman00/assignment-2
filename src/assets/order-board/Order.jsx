import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderLists from "./OrderLists";
import OrderSummary from "./OrderSummary";

export default function Order() {
  const [orderLists, setOrderLists] = useState([]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <CreateOrder setOrderLists={setOrderLists} />
      </div>
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary orderLists={orderLists} />
        <OrderLists orderLists={orderLists} />
      </div>
    </div>
  );
}
