import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Section />
      <div className={styles.mainContainer}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
