import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li className="menu-item-has-children">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="menu-item-has-children">
        <a href="#">Event</a>
      </li>
      <li className="menu-item-has-children">
        <a href="#">Pages</a>
      </li>
      <li className="menu-item-has-children">
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default Nav;
