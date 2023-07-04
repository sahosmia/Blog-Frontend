import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryCreate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = "http://127.0.0.1:8000/api/v1/categories";
    setIsLoading(true);

    try {
      const response = await axios.post(baseURL, formData);
      setError(null);
      setIsLoading(false);
      setFormData({ title: "", description: "" });
      toast.success(response.data.message);
    } catch (error) {
      // if (error.response.status == 404) {
      //   toast.error(error.response.statusText);
      // }
      setError(error.response.data.errors);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="w-full max-w-xs m-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            {isLoading && <h1>loading....</h1>}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  error && error.title && "border-red-500"
                }`}
                id="title"
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              {error && error.title && (
                <p className="text-red-500 text-xs italic">{error.title}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  error && error.description && "border-red-500"
                }`}
                id="description"
                type="description"
                rows="5"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
              {error && error.description && (
                <p className="text-red-500 text-xs italic">
                  {error.description}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default CategoryCreate;
