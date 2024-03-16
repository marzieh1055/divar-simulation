import React from "react";
import ImagePlaceholder from "../skeleton/ImagePlaceholder";
import AdvertisingCard from "./AdvertisingCard";

function AdvertisingList({ title, response, loading }) {
  return (
    <>
      <h1>{title}</h1>
      <div className=" w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-around mt-4">
        {loading &&
          ["", "", "", "", "", ""].map((i, index) => (
            <ImagePlaceholder key={index} />
          ))}
        {response?.map((post, index) => (
          <AdvertisingCard key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default AdvertisingList;
