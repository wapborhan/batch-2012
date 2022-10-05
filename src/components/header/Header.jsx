import React from "react";

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
                    <i className="fas fa-phone"></i>Call for any information:{" "}
                    <a href="tel:+8801903333110">+880 190 33 33 110</a>
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
                    </nav>
                  </div>
                  <div className="col d-block d-lg-none">
                    <button type="button" className="vs-menu-toggle">
                      <i className="far fa-bars"></i> Menu
                    </button>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="header-button">
                      <button
                        type="button"
                        className="searchBoxToggler simple-icon"
                      >
                        <i className="far fa-search"></i>
                      </button>
                      <a href="#" className="vs-btn d-none d-xl-block">
                        Buy Tickets
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