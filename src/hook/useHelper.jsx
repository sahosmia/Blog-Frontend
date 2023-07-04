import React, { useState } from "react";
import Axios from "../api/http";
import { toast } from "react-toastify";

function useHelper() {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fatch data
  async function fetchData(url) {
    setIsLoading(true);

    try {
      const response = await Axios.get(url);
      setDatas(response.data.data);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setDatas(null);
    }
    setIsLoading(false);
  }

  // delete
  async function fetchDelete(url) {
    try {
      const response = await Axios.delete(url);
      toast.success(response.data.message);
    } catch (error) {
      if (error.response.status == 404) {
        toast.error(error.response.statusText);
      }
      setError(error.response.data.errors);
    }
  }

  return {
    datas,
    setDatas,
    isLoading,
    setIsLoading,
    error,
    setError,
    fetchData,
    fetchDelete,
  };
}
export default useHelper;
