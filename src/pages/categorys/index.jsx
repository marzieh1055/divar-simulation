import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import AdvertisingList from "../../components/advertising/AdvertisingList";

function CategorysPage() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const { response, loading, fetchRequest } = useRequest(
    `/categorys/${slug}`,
    "get"
  );

  useEffect(() => {
    fetchRequest();
  }, [pathname]);

  return (
    <AdvertisingList
      title={`آگهی های مرتبط با ${slug}`}
      response={response}
      loading={loading}
    />
  );
}

export default CategorysPage;
