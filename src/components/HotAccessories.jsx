import React from "react";
import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";

const HotAccessories = ({ category, categoryCover }) => {
  return (
    <div className="hot-accessories">
      <div>
        <img src={categoryCover} alt="Cover" height="100%" />
      </div>
      <div>
        {category.map((item, index) => {
          return (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          );
        })}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
