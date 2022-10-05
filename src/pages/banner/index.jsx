import React from "react";

const index = () => {
  return (
    <div className="vs-hero-wrapper">
      <div
        className="hero-slider-4 vs-carousel"
        data-slide-show="1"
        data-md-slide-show="1"
        data-fade="true"
        data-arrows="true"
      >
        {/* <!-- <div className="vs-hero-slide">
                <div className="vs-hero-bg" data-bg-src="assets/img/bg/hero_bg_1_1.jpg" data-overlay="overlay1"
                    data-opacity="7"></div>
                <div className="hero-triangle"><img src="assets/img/shape/hero-triangle.png" alt="shape"></div>
                <div className="hero-content-style4"><span className="sub-title2" data-ani="slideinup" data-ani-delay="0s">The
                        Leading Platform for <img className="title-shape" src="assets/img/shape/title_shape.png"
                            alt="title shape"></span>
                    <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.2s">Largest Conference</h1>
                    <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">In Europe 2022</h1>
                    <div className="event-info" data-ani="slideinup" data-ani-delay="0.6s"><span><i
                                className="fas fa-circle"></i> 28 August, 2022</span> <span><i className="fas fa-circle"></i>
                            1753 Red Maple Drive, United States</span></div>
                    <div className="btn-group" data-ani="slideinup" data-ani-delay="0.8s"><a href="shop.html"
                            className="vs-btn">Purchase Ticket</a> <a href="event-details.html" className="vs-btn style5">View
                            Details</a></div>
                </div>
            </div> --> */}
        <div className="vs-hero-slide">
          <div
            className="vs-hero-bg"
            data-bg-src="assets/img/bg/hero_bg_1_1.jpg"
            data-overlay="overlay1"
            data-opacity="7"
          ></div>
          <div className="hero-triangle">
            <img src="assets/img/shape/hero-triangle.png" alt="shape" />
          </div>
          <div className="hero-content-style4">
            <span
              className="sub-title2"
              data-ani="slideinup"
              data-ani-delay="0s"
            >
              আর মাত্র বাকি
              <img
                className="title-shape"
                src="assets/img/shape/title_shape.png"
                alt="title shape"
              />
            </span>

            <div className="text-center mt-2 mb-2">
              <ul
                className="event-counter style4 counter-list d-flex justify-content-center"
                data-offer-date="02/29/2024"
              >
                <li>
                  <div className="day count-number">00</div>
                  <span className="count-name">Days</span>
                </li>
                <li>
                  <div className="hour count-number">00</div>
                  <span className="count-name">Hours</span>
                </li>
                <li>
                  <div className="minute count-number">00</div>
                  <span className="count-name">Minutes</span>
                </li>
                <li>
                  <div className="seconds count-number">00</div>
                  <span className="count-name">Seconds</span>
                </li>
              </ul>
            </div>

            <h1
              className="hero-title"
              data-ani="slideinup"
              data-ani-delay="0.2s"
            >
              ১ জুগ পূর্তি ও পুনর্মিলনী
            </h1>
            <h1
              className="hero-title"
              data-ani="slideinup"
              data-ani-delay="0.4s"
            >
              এস এস সি ব্যাচ ২০১২
            </h1>
            <div
              className="event-info"
              data-ani="slideinup"
              data-ani-delay="0.6s"
            >
              <span>
                <i className="fas fa-circle"></i> ২৯ ফেব্রুয়ারি, ২০২৪
              </span>{" "}
              <span>
                <i className="fas fa-circle"></i>
                ধরমপুর মাধ্যমিক বিদ্যালয়য়
              </span>
            </div>
            <div
              className="btn-group"
              data-ani="slideinup"
              data-ani-delay="0.8s"
            >
              <a href="#" className="vs-btn">
                রেজিস্ট্রেশন করুন{" "}
              </a>{" "}
              <a href="#" className="vs-btn style5">
                বিস্তারিত জানুন
              </a>
            </div>
          </div>
        </div>
        {/* <!-- <div className="vs-hero-slide">
                <div className="vs-hero-bg" data-bg-src="assets/img/bg/hero_bg_1_3.jpg" data-overlay="overlay1"
                    data-opacity="7"></div>
                <div className="hero-triangle"><img src="assets/img/shape/hero-triangle.png" alt="shape"></div>
                <div className="hero-content-style4"><span className="sub-title2" data-ani="slideinup" data-ani-delay="0s">The
                        Leading Platform for <img className="title-shape" src="assets/img/shape/title_shape.png"
                            alt="title shape"></span>
                    <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.2s">Largest convention</h1>
                    <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">In Texas 2022</h1>
                    <div className="event-info" data-ani="slideinup" data-ani-delay="0.6s"><span><i
                                className="fas fa-circle"></i> 27 August, 2022</span> <span><i className="fas fa-circle"></i>
                            2623 Poco Mas Drive Dallas Texas</span></div>
                    <div className="btn-group" data-ani="slideinup" data-ani-delay="0.8s"><a href="shop.html"
                            className="vs-btn">Purchase Ticket</a> <a href="event-details.html" className="vs-btn style5">View
                            Details</a></div>
                </div>
            </div> --> */}
      </div>
      <div
        className="shape-mockup jump d-none d-sm-block"
        data-top="15%"
        data-left="15%"
      >
        <img src="assets/img/shape/circle-7.png" alt="shapes" />
      </div>
      <div className="shape-mockup spin" data-bottom="24%" data-left="19%">
        <img src="assets/img/shape/plus-3.png" alt="shapes" />
      </div>
      <div className="shape-mockup spin" data-top="8.5%" data-right="34%">
        <img src="assets/img/shape/plus-4.png" alt="shapes" />
      </div>
      <div
        className="shape-mockup jump-reverse d-none d-sm-block"
        data-bottom="30%"
        data-right="13%"
      >
        <img src="assets/img/shape/circle-8.png" alt="shapes" />
      </div>
      <div
        className="shape-mockup movingX"
        data-bottom="15.5%"
        data-right="30%"
      >
        <img src="assets/img/shape/line-11.png" alt="shapes" />
      </div>
      <div className="shape-mockup spin" data-top="3%" data-left="40%">
        <img src="assets/img/shape/triangle-7.png" alt="shapes" />
      </div>
      <div
        className="shape-mockup spin d-none d-sm-block"
        data-bottom="0%"
        data-left="44%"
      >
        <img src="assets/img/shape/triangle-8.png" alt="shapes" />
      </div>
      <div
        className="shape-mockup jump-reverse d-none d-sm-block"
        data-bottom="5%"
        data-left="0%"
      >
        <img src="assets/img/shape/triangle-9.png" alt="shapes" />
      </div>
      <div className="shape-mockup jump" data-top="7%" data-right="0%">
        <img src="assets/img/shape/triangle-10.png" alt="shapes" />
      </div>
      <div className="section-after">
        <img src="assets/img/shape/curved-shape-bottom.png" alt="shape" />
      </div>
    </div>
  );
};

export default index;
