import React, { useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import ImagePlaceholder from "../../components/skeleton/ImagePlaceholder";
import IndexOrderCard from "../../components/order/IndexOrderCard";

function IndexOrders() {
  const { response, loading, error, fetchRequest } = useRequest(
    "/orders/orders",
    "GET"
  );

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
          <IndexOrderCard {...order} />
        ))}
      </div>
    </>
  );
}

export default IndexOrders;
