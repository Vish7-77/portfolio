import React from "react";
import "./productList.css";
import Product from "../Product/Product";
import products from "../../data";

const ProductList = () => {


  return (
    <>
      <div className="p1">
        {/* <img src={pot} /> */}
        <div className="p1-text">
          <h1 className="p1-title"> career & inspire, its Vish</h1>
          <p className="p1-desc">
           Here some of my projects you can click and check it 
          </p>
        </div>
        <div className="p1-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
