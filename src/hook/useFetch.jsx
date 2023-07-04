import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("data not get");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setDatas(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
    
    return {datas, isLoading, error}
}

export default useFetch;
