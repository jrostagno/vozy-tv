import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import LateralNav from "../LateralNav/LateralNav";
import styles from "./Layout.module.css";

const Layout = ({
  children,
  session,
  handleChange,
  allTvShow,
  setFilteredShows,
}) => {
  return (
    <div className={styles.container}>
      <LateralNav allTvShow={allTvShow} setFilteredShows={setFilteredShows} />
      <div className={styles.mainContainer}>
        <Navbar
          handleChange={handleChange}
          allTvShow={allTvShow}
          setFilteredShows={setFilteredShows}
          session={session}
        />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
