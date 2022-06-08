import React from "react";
import PreNavbar from "./components/PreNavBar/PreNavbar";
import Navbar from "./components/NavBar/Navbar";
import Slider from "./components/Slider/Slider";
import Offers from "./components/Offers/Offers";
import Heading from "./components/Heading/Heading";
import StarProducts from "./components/StarProducts/StarProducts";
import HotAccessoriesMenu from "./components/HotAccessories/HotAccessoriesMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotAccessories from "./components/HotAccessories/HotAccessories";
import ProductReviews from "./components/ProductReviews/ProductReviews";
import Videos from "./components/Videos/Videos";
import InThePress from "./components/InThePress/InThePress";
import Footer from "./components/Footer/Footer";
import NavOptions from "./components/NavBar/NavOptions";
import data from "./data/data.json";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              category={data.hotAccessories.music}
              categoryCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartdevices"
          element={
            <HotAccessories
              category={data.hotAccessories.smartDevice}
              categoryCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
              category={data.hotAccessories.home}
              categoryCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              category={data.hotAccessories.lifeStyle}
              categoryCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileaccessories"
          element={
            <HotAccessories
              category={data.hotAccessories.mobileAccessories}
              categoryCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS" />
      <InThePress end={data.banner.end}/>
      <Footer footer={data.footer}/>
    </BrowserRouter>
  );
};

export default App;
