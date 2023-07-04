import React, { useEffect, useState } from "react";
import Axios from "axios";

function useAxios(method, url) {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
      if (method == "get") {
          
      try {
          const response = await axios.get(url);
          setDatas(response.data.data);
          setError(null)
          setIsLoading(false);

      } catch (error) {
         console.log(error);
          setError(error.message);
          setDatas(null)
          setIsLoading(false);
      }
        
        
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw Error("data not get");
  //         } else {
  //           return res.json();
  //         }
  //       })
  //       .then((data) => {
  //         setDatas(data.data);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //         setIsLoading(false);
  //       });
  //   }, [url]);

  return { datas, isLoading, error };
}

export default useAxios;
