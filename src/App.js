import React, { Fragment } from "react";
import Header from "./components/header/Header";
import MobileMenu from "./components/header/MobileMenu";
import HomePage from "./home/HomePage";
import Footer from "./components/Footer";
import { About } from "./pages";
import NotFound from "./components/NotFound";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <MobileMenu />
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
