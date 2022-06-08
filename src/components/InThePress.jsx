import React from "react";
import Carousel from "react-bootstrap/Carousel";

const InThePress = ({ end }) => {
  return (
    <div>
      <Carousel fade>
        {end.map((item) => {
          return (
            <Carousel.Item key={item.image}  keyboard="true">
              <img className="d-block w-100" src={item.image} alt="End banner" />
              <Carousel.Caption>
                <h3 >{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read More</u>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default InThePress;
