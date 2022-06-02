import React, { useEffect, useState } from "react";
import NavCard from "./NavCard";
import "../styles/NavOptions.css";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifestyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhonesToggle, setMiPhonesToggle] = useState(false);
  const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] =
    useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones"){
      return setMiPhonesToggle(true);
    }
    if (window.location.pathname === "/redmiphones"){
      return setRedmiPhonesToggle(true);
    }
    if (window.location.pathname === "/tv"){
      return setTvToggle(true);
    }
    if (window.location.pathname === "/laptops"){
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/lifestyle"){
      return setFitnessAndLifestyleToggle(true);
    }
    if (window.location.pathname === "/home"){
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/audio"){
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/accessories"){
      return setAccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="nav-options">
      {miPhonesToggle
        ? miPhones.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {redmiPhonesToggle
        ? redmiPhones.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {tvToggle
        ? tv.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {laptopToggle
        ? laptop.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {fitnessAndLifestyleToggle
        ? fitnessAndLifestyle.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {homeToggle
        ? home.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {audioToggle
        ? audio.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
      {accessoriesToggle
        ? accessories.map((item) => {
            return (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            );
          })
        : null}
    </div>
  );
};

export default NavOptions;
