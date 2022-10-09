import React from "react";
import AboutBG from "../../assets/img/bg/bg-8.png";
import CardShape from "../../assets/img/shape/card-shape.png";
import eplan1 from "../../assets/img/icon/eplan-1.png";
import eplan2 from "../../assets/img/icon/eplan-2.png";
import eplan3 from "../../assets/img/icon/eplan-3.png";
import eplan4 from "../../assets/img/icon/eplan-4.png";

const index = () => {
  return (
    <section
      className="bg-smoke space-top space-extra-bottom"
      style={{
        backgroundImage: `url("${AboutBG}")`,
      }}
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">পুনর্মিলনীর পরিকল্পনা</span>
          <h2 className="sec-title">কেন আপনার পুনর্মিলনীতে যোগদান করা উচিত</h2>
          <span className="shape-title"></span>
        </div>
        <div
          className="row vs-carousel"
          data-slide-show="4"
          data-lg-slide-show="3"
          data-arrows="true"
        >
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">সাক্ষাৎ</h3>
                <p className="vs-card_text">
                  দীর্ঘ ১২ বছর পরে একে অপরের সাথে সাক্ষাৎ হওয়া।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src={eplan1} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">স্মৃতিচারণ</h3>
                <p className="vs-card_text">
                  স্কুল এর পুরাতন স্মৃতি অটোমেটিক সবার মনের মধ্যে উদয় হবে।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src={eplan2} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">জ্ঞাত হত্তয়া</h3>
                <p className="vs-card_text">
                  অনেক দিন সবার সাথে দেখা হওয়ার মাধমে সবাই সবার সম্পর্কে জানতে
                  পারবে।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src={eplan3} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="vs-card">
              <div className="vs-card_content shadow">
                <div className="vs-card_shape">
                  <img src={CardShape} alt="shape" />
                </div>
                <h3 className="vs-card_title">পরিচিত থাকা</h3>
                <p className="vs-card_text">
                  অনেকের সাথে যোগাযোগ বিছিন্ন রয়েছে, আশা করি সেটা আবারও অক্ষুণ্ণ
                  থাকবে।
                </p>
              </div>
              <div className="vs-card_icon shadow">
                <img src={eplan4} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
