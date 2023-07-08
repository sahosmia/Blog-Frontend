import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../../context/AuthContext";
import Axios from "../../../api/http";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const { token, setToken, user, setUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await Axios.post("login", formData);
      setError(null);
      setIsLoading(false);
      setFormData({
        password: "",
        email: "",
      });
      setToken(response.data.data.token);
      setUser(response.data.data.user);
      // localStorage.setItem("TOKEN", response.data.data.token);
      console.log(response);
    } catch (error) {
      setError(error.response.data.errors);
      setIsLoading(false);

      console.log(error);
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
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  error && error.name && "border-red-500"
                }`}
                id="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {error && error.email && (
                <p className="text-red-500 text-xs italic">{error.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  error && error.password && "border-red-500"
                }`}
                id="password"
                type="text"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {error && error.password && (
                <p className="text-red-500 text-xs italic">{error.password}</p>
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

export default Login;
