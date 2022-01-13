import React from "react";
import portfolio from "../images/portfolio.png";

export default function Header() {
  return (
    <div className="header">
      <img src={portfolio} alt="portfolio icon" className="logo" />
    </div>
  );
}
