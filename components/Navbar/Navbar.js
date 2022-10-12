import React, { useState } from "react";
import { FaCheck, FaAlignJustify } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Avatar from "../Avatar/Avatar";

import styles from "./Navar.module.css";
import { showGenra } from "../../lib/const";

const Navbar = ({ session, handleChange, allTvShow, setFilteredShows }) => {
  const [genra, setGenra] = useState("");

  const handleChangeGenra = (e) => {
    setGenra(e.target.value);
  };

  const applyFilters = () => {
    let filterByGenra = allTvShow;
    filterByGenra = allTvShow.filter((tvshow) => tvshow.genres.includes(genra));
    setFilteredShows(filterByGenra);
  };

  const resetFilters = () => {
    setFilteredShows(allTvShow);

    setGenra("");
  };

  return (
    <nav
      style={{ backgroundColor: "#e0e0e0" }}
      className="navbar bg-light p-2 px-4"
    >
      <div className="container-fluid">
        <button
          className="btn btn-light d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <FaAlignJustify />
        </button>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className={styles.filter}>
              <div className={styles.selectsContent}>
                <label>Genre</label>
                <select
                  className="form-select"
                  onChange={handleChangeGenra}
                  aria-label="Default select example"
                >
                  <option selected>Genra</option>
                  {showGenra.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.btnMobile}>
                <button
                  type="button"
                  onClick={applyFilters}
                  class="btn btn-primary"
                >
                  Filter
                </button>
                <button
                  type="button"
                  onClick={resetFilters}
                  class="btn btn-secondary"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <form className="d-flex sm-d-none" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            onChange={handleChange}
            aria-label="Search"
          />
        </form>
        <div className="dropdown">
          <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Avatar session={session} h="40px" w="40px" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                onClick={() => signOut()}
                className="dropdown-item"
                type="button"
              >
                Sing out
              </button>
            </li>
            <li>
              <button disabled className="dropdown-item" type="button">
                Profile Info
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.userInformation}>
        <Avatar session={session} h="77px" w="77px" />
        <div>
          <h1 className="display-6  ">{`Welcome, ${session.user.name}`}</h1>
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
