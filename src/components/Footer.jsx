import React from "react";
import FootBG from "../assets/img/bg/footer_bg_1.jpg";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper footer-layout4"
      style={{
        backgroundImage: `url("${FootBG}")`,
      }}
    >
      {/* <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-auto col-md-6">
              <div className="widget footer-widget">
                <div className="vs-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <img src="assets/img/logo-white.png" alt="Evona" />
                    </a>
                  </div>
                  <p className="about-text">
                    Lorem ipsum dolor amet consectetur adipiscing elit ut
                    aliquam purus sit amet magna elemen facilisis. Enim praesent
                    elementum facilisis.
                  </p>
                  <div className="vs-social">
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>{" "}
                    <a href="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>{" "}
                    <a href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-md-6">
              <div className="widget footer-widget widget_nav_menu">
                <h4 className="widget_title">Our Services</h4>
                <ul className="menu">
                  <li>
                    <a href="contact.html">Log In</a>
                  </li>
                  <li>
                    <a href="contact.html">Register</a>
                  </li>
                  <li>
                    <a href="about.html">About Evona</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Support</a>
                  </li>
                  <li>
                    <a href="shop.html">How It Works</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-auto col-md-6">
              <div className="widget footer-widget widget_nav_menu">
                <h4 className="widget_title">Quick links</h4>
                <ul className="menu">
                  <li>
                    <a href="contact.html">Sponsors</a>
                  </li>
                  <li>
                    <a href="speaker.html">Speakers</a>
                  </li>
                  <li>
                    <a href="shop.html">Buy Ticket</a>
                  </li>
                  <li>
                    <a href="contact.html">Schedule</a>
                  </li>
                  <li>
                    <a href="gallery.html">Event Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright">
        <div className="container">
          <div className="copyright text-dark">
            সাইট ডিজাইন করেছেন{" "}
            <a target="_BLANK" href="https://www.wapborhan.com/">
              বোরহান উদ্দিন
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
