import React from "react";
import Nav from "./NavMenu";
import { FaTimes, FaBars } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="vs-menu-wrapper">
      <div className="vs-menu-area">
        <button className="vs-menu-toggle">
          <FaTimes />
        </button>
        <div className="mobile-logo">
          {/* <!-- <img src="assets/img/logo.png" alt="Evona"> --> */}
          SSC Batch 2012
        </div>
        <div className="vs-mobile-menu">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Menu;
