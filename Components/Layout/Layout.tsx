import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
