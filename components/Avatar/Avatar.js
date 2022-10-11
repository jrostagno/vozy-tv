/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Avatar.module.css";

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        src="./tamila.jpg"
        style={{ width: "100%", height: "100%" }}
        className="bg-info rounded-circle"
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
