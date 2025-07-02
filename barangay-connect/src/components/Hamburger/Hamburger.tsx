import React from "react";
import "./Hamburger.css";

interface HamburgerProps {
  isOpen: boolean;
}

export const Hamburger = ({ isOpen }: HamburgerProps) => {
  return (
    <div className={`hamburger ${isOpen ? "is-open" : ""}`}>
      <div className="hamburger__burger burger1"></div>
      <div className="hamburger__burger burger2"></div>
      <div className="hamburger__burger burger3"></div>
    </div>
  );
};
