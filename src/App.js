import React, { Fragment } from "react";
import Header from "./components/header/Header";
import HomePage from "./home/HomePage";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
