import React from "react";
import "./Product.scss";

const Product = ({ img, link }) => {
  return (
    <div className="pv">
      <div className="p-brow">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="p-img" src={img} alt="" />
      </a>
    </div>
  );
};

export default Product;
