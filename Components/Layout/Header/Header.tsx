import React from "react";
import "./Header.css";
import siteLogo from "../../../Assets/Images/siteLogo.jpeg";

export default function Header() {
  return (
    <header className="header">
      Basketball Gallery <img src={siteLogo} className="logo" />
    </header>
  );
}
