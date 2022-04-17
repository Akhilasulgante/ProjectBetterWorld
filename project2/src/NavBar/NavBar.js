import React from "react";
import "./NavBar.css";
import Logo from "../Assets/Logo.jpg";

/**
 * This component displays the Navigation bar of the site
 */
export default function NavBar() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Logo" />
      <div>
        <ul className="list">
          <a href="/">
            <li className="items">Home</li>
          </a>
          <a href="/Stories">
            <li className="items">Stories</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
