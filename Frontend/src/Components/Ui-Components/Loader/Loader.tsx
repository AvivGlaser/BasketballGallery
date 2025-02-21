import React from "react";
// import basketballLoader from "../../../Assets/basketballLoader.png";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div aria-label="Loading" role="alert" className="loader">
        <span className="loader-text">Just a moment please...</span>
      </div>
    </div>
  );
}
