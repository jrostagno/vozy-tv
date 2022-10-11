/* eslint-disable @next/next/no-img-element */
import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./Navar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-white p-2 px-4 ml-2 mr-2">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Avatar />
    </nav>
  );
};

export default Navbar;
