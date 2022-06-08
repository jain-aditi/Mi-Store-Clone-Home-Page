import React from "react";

const Offer = ({ src, link, index }) => {
  return (
      <a href={link} className="offer">
        <img src={src} alt={`${index} offer`} width="100%"/>
      </a>
  );
};

export default Offer;
