import React from "react";
import "./StarProducts.css";

const StarProducts = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="1st Product" width="100%"/>
        </a>
      </div>
      <div className="star-product-2and3">
        <div>
          <a href={starProduct[1].url}>
            <img src={starProduct[1].image} alt="2nd Product" width="50%" />
          </a>
          <a href={starProduct[2].url}>
            <img src={starProduct[2].image} alt="3rd Product" width="50%" />
          </a>
        </div>
        <a href={starProduct[3].url}>
          <img src={starProduct[3].image} alt="4th Product" width="100%" />
        </a>
      </div>
    </div>
  );
};

export default StarProducts;
