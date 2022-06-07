import React from "react";
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ name, image, review, price }) => {
  return (
    <div className="product-review-card">
      <div>
        <img src={image} alt={name} width="100%"/>
        <h5>{name}</h5>
        <span>{review}</span>
        <b>{price}</b>
      </div>
    </div>
  );
};

export default ProductReviewCard;
