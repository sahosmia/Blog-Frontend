import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import useHelper from "../../../hook/useHelper";
import CategoryItem from "../components/CategoryItem";
import React from "react";
import { Helmet } from "react-helmet";


function Category() {
  const { datas, isLoading, error, fetchData } = useHelper();
  const [totalItem, setTotalItem] = useState(8);
  const [pageTitle, setPageTitle] = useState("Dynamic Page Title");

  useEffect(() => {
    fetchData("/categories");
  }, []);

    useEffect(() => {
    setPageTitle('Dynamic Page Title'); // Replace with your dynamic title logic

    // Update the document title
    document.title = pageTitle;

    // Optionally, you can also update other meta tags or perform other side effects here

    // Cleanup function (optional)
    return () => {
      // Undo any changes made in useEffect (if necessary)
      document.title = 'Default Title';
    };
  }, []);

  return (
    <div>
       <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
       <div className="container">
      
      {error && <h1>{error}</h1>}
      {isLoading && <h1>loading....</h1>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  justify-center items-center py-5">
        {datas &&
          (datas.length != 0 ? (
            datas.slice(0,totalItem).map((data) => (
              <CategoryItem data={data} key={data.id} />
            ))
          ) : (
            <h1>No Data to show</h1>
          ))}
      </div>

      {(datas && datas.length > totalItem) &&
      <button onClick={()=> setTotalItem(totalItem+8)} className="text-white px-7 py-4 bg-purple-500 rounded font-medium m-auto block">Load more</button>
      }
      <ToastContainer></ToastContainer>
    </div>
    </div>
   
  );
}

export default Category;
