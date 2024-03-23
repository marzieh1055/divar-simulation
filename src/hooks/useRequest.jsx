import { useState } from "react";

import { httpService } from "../services/http.service";

function useRequest(url, method, headers) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [percentProgress, setPercentProgress] = useState(0);

  const fetchRequest = (payload) => {
    setLoading(true);
    const configs = {
      headers: { ...headers },
      onUploadProgress: (pe) => {
        setPercentProgress((pe.loaded / pe.total) * 100);
      },
    };
    httpService[method.toLowerCase()](
      url,
      method.toLowerCase() === "post" && payload,
      configs
    )
      .then((res) => {
        setResponse(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.response?.data || "خطا در برقراری ارتباط");
      });
  };

  return { response, error, loading, fetchRequest, percentProgress };
}

export default useRequest;
