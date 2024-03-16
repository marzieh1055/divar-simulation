import { useEffect } from "react";
import useRequest from "./useRequest";

function useAuth() {
  const { response, loading, error, fetchRequest } = useRequest(
    "/auth/who-am-i",
    "get"
  );

  useEffect(() => {
    fetchRequest();
  }, []);
  
  return response;
}

export default useAuth;
