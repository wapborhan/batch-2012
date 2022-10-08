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
                <h3 className="vs-card_title">Bulding</h3>
                <p className="vs-card_text">
                  Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor ut
                  labore promise
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
                  Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor ut
                  labore promise
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
                <h3 className="vs-card_title">Planning</h3>
                <p className="vs-card_text">
                  Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor ut
                  labore promise
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
                <h3 className="vs-card_title">Monetizing</h3>
                <p className="vs-card_text">
                  Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor ut
                  labore promise
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
