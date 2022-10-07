import React, { useState, useEffect } from "react";
import HeroBG from "../../assets/img/bg/hero_bg_1_1.jpg";
import title_shape from "../../assets/img/shape/title_shape.png";
import Curved_B from "../../assets/img/shape/curved-shape-bottom.png";

const Index = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("02/29/2024").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <div className="vs-hero-wrapper">
      <div
        className="hero-slider-4 vs-carousel"
        data-slide-show="1"
        data-md-slide-show="1"
        data-fade="true"
        data-arrows="true"
      >
        <div className="vs-hero-slide">
          <div
            className="vs-hero-bg"
            style={{
              backgroundImage: `url("${HeroBG}")`,
            }}
            data-overlay="overlay1"
            data-opacity="7"
          ></div>
          {/* <div className="hero-triangle">
            <img src="assets/img/shape/hero-triangle.png" alt="shape" />
          </div> */}
          <div className="hero-content-style4">
            <span
              className="sub-title2"
              data-ani="slideinup"
              data-ani-delay="0s"
            >
              আর মাত্র বাকি
              <img
                className="title-shape"
                src={title_shape}
                alt="title shape"
              />
            </span>

            <div className="text-center mt-2 mb-2">
              <ul
                className="event-counter style4 counter-list d-flex justify-content-center"
                data-offer-date="02/29/2024"
              >
                <li>
                  <div className="day count-number">{state.days || "0"}</div>
                  <span className="count-name">Days</span>
                </li>
                <li>
                  <div className="hour count-number">{state.hours || "00"}</div>
                  <span className="count-name">Hours</span>
                </li>
                <li>
                  <div className="minute count-number">
                    {state.minutes || "00"}
                  </div>
                  <span className="count-name">Minutes</span>
                </li>
                <li>
                  <div className="seconds count-number">
                    {state.seconds || "00"}
                  </div>
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
      </div>
      <div className="section-after">
        <img src={Curved_B} alt="shape" />
      </div>
    </div>
  );
};

export default Index;
