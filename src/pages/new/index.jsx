import React, { useEffect } from "react";
import AdvertisingCard from "../../components/advertising/AdvertisingCard";
import useRequest from "../../hooks/useRequest";
import ImagePlaceholder from "../../components/skeleton/ImagePlaceholder";

function NewPage() {
  const { response, loading, error, fetchRequest } = useRequest(
    "/posts",
    "GET"
  );

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <>
      <h1>آگهی های جدید</h1>
      <div className=" w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-around mt-4">
        {loading && ["", "", "","", "", ""].map((i, index) => <ImagePlaceholder key={index} />)}
        {response?.map((post, index) => (
          <AdvertisingCard key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default NewPage;
