import React, { Fragment } from "react";
import Banner from "./banner";
import About from "./about";
import WhyJoin from "./why-join";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <About />
      <WhyJoin />
    </Fragment>
  );
};

export default HomePage;
