import React, { useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import OrderCard from "../../components/order/OrderCard";
import ImagePlaceholder from "../../components/skeleton/ImagePlaceholder";

function OrdersPage() {
  const { response, loading, error, fetchRequest } = useRequest(
    "/orders/my-orders",
    "GET"
  );

  console.log(response);

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <>
      <h1>سفارش های من</h1>
      <div className=" w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-around mt-4">
        {loading &&
          ["", "", "", "", "", ""].map((i, index) => (
            <ImagePlaceholder key={index} />
          ))}
        {response?.map((order, index) => (
          <OrderCard {...order} />
        ))}
      </div>
    </>
  );
}

export default OrdersPage;
