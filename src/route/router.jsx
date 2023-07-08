import { createBrowserRouter } from "react-router-dom";
import Login from "../module/Auth/pages/Login";
import Register from "../module/Auth/pages/Register";

import GuestLayout from "../module/Auth/layout/GuestLayout";
import FrontLayout from "../module/Front/layout/FrontLayout";
import AdminLayout from "../module/Admin/layout/AdminLayout";

import Home from "../module/Front/pages/Home";
import Category from "../module/Front/pages/Category";
import Blog from "../module/Front/pages/Blog";

import AdCategory from "../module/Admin/pages/category/Category";
import AdCategoryCreate from "../module/Admin/pages/category/CategoryCreate";
import AdCategoryEdit from "../module/Admin/pages/category/CategoryEdit";
import NotFound from "../page/NotFound";
// Page

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
    ],
  },

  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      { path: "categories", element: <AdCategory /> },
      { path: "categories/create", element: <AdCategoryCreate /> },
      { path: "categories/edit/:id", element: <AdCategoryEdit /> },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
