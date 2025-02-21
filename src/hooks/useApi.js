import { useState, useEffect, useCallback } from "react";
import { apiCall } from "../services/apiServicejs";

const useApi = (method, url, initialData = null, params = null) => {
  const [response, setResponse] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (body = null) => {
      setLoading(true);
      setError(null);
      try {
        const result = await apiCall(method, url, body, params);
        setResponse(result);
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [method, url, params]
  );

  // Fetch data on mount for GET requests
  useEffect(() => {
    if (method.toUpperCase() === "GET") {
      fetchData();
    }
  }, [fetchData]);

  return { response, loading, error, refetch: fetchData };
};

export default useApi;
