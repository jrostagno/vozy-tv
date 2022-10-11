import React from "react";
import { FaBars, FaCheck } from "react-icons/fa";
import Avatar from "../Avatar/Avatar";

import styles from "./Navar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-light p-2 px-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex sm-d-none" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="dropdown">
          <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Avatar h="40px" w="40px" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.userInformation}>
        <Avatar h="77px" w="77px" />
        <div>
          <h1 className="display-6  ">Welcome, Emilia Hirsh </h1>
          <div className={styles.subInfo}>
            <FaCheck color="green" />
            <h5>Verify Account</h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
