import React from "react";
import TitleShape from "../../assets/img/shape/title_shape.png";
import About from "../../assets/img/normal/about_4.jpg";
//
import { FaCalendarAlt, FaMapMarkerAlt, FaPlayCircle } from "react-icons/fa";

const index = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-lg-0 mb-60">
            <div className="about-img4">
              <img src={About} alt="about image" />
              <div className="speaker-count">
                <div className="counter-number">80+</div>
                <span className="text">ছাত্র/ছাত্রি</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <span className="sub-title2">
              পুনর্মিলনী সম্পর্কে জানুন{" "}
              <img className="title-shape" src={TitleShape} alt="title shape" />
            </span>
            {/* <h2 className="sec-title mb-30">About The Event</h2> */}
            <p className="mb-35 text-justify">
              আমরা স্কুল জীবন শেষ করেছি প্রায় ১২ বছর হয়ে গেল। আমরা এই মূহুর্তে
              প্রত্যেকেই কর্মজীবনে প্রবেশ করেছি । প্রতিবছর রমজান মাসে ১০-১২ জন
              মিলে একটা ইফতার মাহফিল আয়োজন করা হয়। এই ছোট প্রচেষ্টা থেকে মনের
              মধ্যে উদয় হলো, ১ যুগ তো প্রায় হয়ে আসছে অনেকের সাথে দেখা হইনা। তায়
              সেই চিন্তা ভাবনা থেকে এই আয়োজন।
            </p>
            <div className="info-media-wrap">
              <div className="info-media">
                <div className="info-media_icon">
                  <FaCalendarAlt />
                </div>
                <div className="media-body">
                  <h3 className="info-media_title">কবে হবে</h3>
                  <p className="info-media_text">
                    বৃহস্পতিবার - ২৯ ফেব্রুয়ারি, ২০২৪
                  </p>
                </div>
              </div>
              <div className="info-media">
                <div className="info-media_icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="media-body">
                  <h3 className="info-media_title">কোথায় হবে</h3>
                  <p className="info-media_text">ধরমপুর মাধ্যমিক বিদ্যালয়য়</p>
                </div>
              </div>
            </div>
            <div className="btn-group justify-content-center">
              <a href="#" className="vs-btn me-4">
                বিস্তারিত
              </a>{" "}
              {/* <a
                href="https://www.youtube.com/watch?v=FCMrbA5FgZs"
                className="popup-video video-btn"
              >
                <i className="fas fa-play">
                  <FaPlayCircle />
                </i>
                Watch Video
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
