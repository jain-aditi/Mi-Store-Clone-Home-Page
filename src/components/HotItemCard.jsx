import React from "react";
import "../styles/HotItemCard.css"

const HotItemCard = ({ index, name, price, image }) => {
  return (
    <div className="hot-item-card">
      <img src={image} alt={`${index} Product`} width="100%"/>
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
