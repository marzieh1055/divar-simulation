import React, { useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import AdvertisingList from "../../components/advertising/AdvertisingList";

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
      <AdvertisingList
        title={"آگهی های جدید"}
        response={response}
        loading={loading}
      />
    </>
  );
}

export default NewPage;
