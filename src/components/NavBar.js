import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border-b-4 border-green-700 text-center fixed top-0 w-full bg-green-600 font-bold text-lg text-white pb-4 pt-3">
      <ul>
        <li className="inline-block pt-4 pb-4"></li>
        <Link to="/" className="pl-6 pr-8">
          Home
        </Link>
        <li className="inline-block pt-4 pb-4"></li>
        <Link to="/about" className="pl-6 pr-8">
          About
        </Link>
        <li className="inline-block pt-4 pb-4"></li>
        <Link to="/articles-list" className="pl-6 pr-8">
          Articles
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
