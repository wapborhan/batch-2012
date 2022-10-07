import React from "react";
import Nav from "./NavMenu";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="vs-header header-layout3">
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-phone"></i>যেকোনো তথ্যের জন্য কল করুন:{" "}
                    <a className="text-dark" href="tel:+880758325669">
                      +880 1758 32 56 69
                    </a>{" "}
                    ও{" "}
                    <a className="text-dark" href="tel:+8801627429558">
                      +880 1627 42 95 58
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links">
                <span className="header-links-title">Follow Us:</span>
                <ul>
                  <li>
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        <div className="sticky-active">
          <div className="container">
            <div className="row gx-35 align-items-center">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="index.html">
                    SSC Batch 2012
                    {/* <!-- <img src="assets/img/logo.png"
                                        alt="Evona"> --> */}
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                      <Nav />
                    </nav>
                  </div>
                  <div className="col d-block d-lg-none">
                    <button type="button" className="vs-menu-toggle">
                      <FaBars /> Menu
                    </button>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="header-button">
                      <a href="#" className="vs-btn d-none d-xl-block">
                        রেজিস্ট্রেশন করুন
                      </a>{" "}
                      <button
                        type="button"
                        className="sideMenuToggler custom-icon"
                      >
                        <span className="three-square"></span>
                        <span className="three-square"></span>
                        <span className="three-square"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
