import React, { useEffect } from "react";
import AdvertisingList from "../../components/advertising/AdvertisingList";
import useRequest from "../../hooks/useRequest";

function MyPostsPage() {
  const { response, loading, error, fetchRequest } = useRequest(
    "/posts/my-posts",
    "GET"
  );

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <>
      <AdvertisingList
        title={"آگهی های من"}
        response={response}
        loading={loading}
      />
      {!loading && response?.length === 0 && (
        <p className=" text-center text-neutral-500">آگهی وجود ندارد</p>
      )}
    </>
  );
}

export default MyPostsPage;
