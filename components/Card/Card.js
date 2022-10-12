/* eslint-disable @next/next/no-img-element */

import React from "react";

const Card = ({ src, title }) => {
  return (
    <div className="col-lg-3  col-md-4 col-6 mb-3">
      <div className="card">
        <img src={src} className="card-img-top" alt="show" />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
