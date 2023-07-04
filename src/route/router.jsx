import { Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Page
import Home from "../page/Home";

import Blog from "../page/Blog";
import BlogSingle from "../page/BlogSingle";
import Category from "../page/Category";
import CategoryCreate from "../page/CategoryCreate";
import CategoryEdit from "../page/CategoryEdit";


export default function router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="blogs" element={<Blog />} />
        <Route path="blogs-single" element={<BlogSingle />} />

        <Route path="categories" element={<Category />} />
        <Route path="categories/create" element={<CategoryCreate />} />
        <Route path="categories/edit/:id" element={<CategoryEdit />} />

      </Route>
    </Routes>
  );
}
