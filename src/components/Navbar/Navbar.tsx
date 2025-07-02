import { useState } from "react";
import CTAButton from "../CTAButton/CTAButton";
import "./Navbar.css";
import navLogo from "../../assets/hero-desktop.png";
import { Hamburger } from "../Hamburger/Hamburger";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img src={navLogo} alt="Logo" />
        </div>
        <div
          className={`navbar__links ${
            hamburgerOpen ? "" : "navbar__links--hidden"
          }`}
        >
          <ul>
            <li className="navbar__links--mobile">
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="navbar__cta-button">
          <CTAButton label="Get the App" onClick={() => null} />
        </div>

        <div
          className={`navbar__hamburger ${hamburgerOpen ? "is-open" : ""}`}
          onClick={toggleHamburger}
        >
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
