import React from "react";

const Menu = () => {
  return (
    <div className="vs-menu-wrapper">
      <div className="vs-menu-area">
        <button className="vs-menu-toggle">
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <a href="index.html">
            {/* <!-- <img src="assets/img/logo.png" alt="Evona"> --> */}
            SSC Batch 2012
          </a>
        </div>
        <div className="vs-mobile-menu">
          <ul>
            <li className="menu-item-has-children">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
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
          <div className="fixed-bottom mx-4">
            <h4>
              Created By <span className="text-danger">Borhan</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
