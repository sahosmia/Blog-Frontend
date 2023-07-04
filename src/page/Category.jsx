import { Link } from "react-router-dom";
import useAxios from "../hook/useAxios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useHelper from "../hook/useHelper";
import { useEffect } from "react";

function Category() {
  const { datas, setDatas, isLoading, error, fetchData, fetchDelete } =
    useHelper();

  const url = "http://127.0.0.1:8000/api/v1/categories";
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Delte Method
  function handleDelete(id) {
    const baseURL = "http://127.0.0.1:8000/api/v1/categories";
    fetchDelete(baseURL + "/" + id);
    setDatas(datas.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <div>
        <h2>Category</h2>
        <Link to={"/categories/create"}>new</Link>
      </div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>loading....</h1>}

      {datas &&
        (datas.length != 0 ? (datas.map((data) => (
          <div key={data.id}>
            <div className="bg-red-300 mb-5 p-5 flex justify-between">
              <h1>{data.title}</h1>
              <div>
                <ul className="flex gap-2">
                  <li>
                    <span onClick={() => handleDelete(data.id)}>delete</span>
                  </li>
                  <li>
                    <Link to={`/categories/edit/${data.id}`}>edit</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))) : <h1>No Data to show</h1>)}


      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Category;
