import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-light">
      <nav className="container h-24">
        

        <ul className="hidden lg:flex gap-3 lg:gap-8 justify-center items-center font-roboto">
          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="blogs"
            >
              Blog
            </NavLink>
          </li>
          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="categories"
            >
              Category
            </NavLink>
          </li>
        </ul>

        <div className="flex lg:hidden">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
