import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarousels } from "../actions/carousel.actions";
import { useTranslation } from "react-i18next";

const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Real_estate = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllCarousels());
  }, [dispatch]);

  // useEffect(() => {
  //   const elementIds = ["hero", "propos", "produits", "service", "temoi"];
  //   const scrollToElements = async () => {
  //     for (const id of elementIds) {
  //       const doc = document.getElementById(id);
  //       doc.scrollIntoView({ behavior: "smooth" });
  //       await new Promise(resolve => setTimeout(resolve, 3000));
  //     }
  //   };
  //   scrollToElements();
  // }, []);

  const images = useSelector((state) => state.carousel.carousels);
  const imagesTwo = [
    "/assets/carouselconst1.jpg",
    "/assets/construction33.png",
    "/assets/carouselconst3.jpg",
  ];
  const imagesToDisplay = images.length > 0 ? images : imagesTwo;

  const CustomDot = ({ onClick, active }) => (
    <li className={active ? "active" : ""} onClick={() => onClick()}>
      <span className="dot"></span>
    </li>
  );

  return (
    <main className="mb-12" id="hero">
      <div className="relative w-full h-screen overflow-hidden">
        <Carousel
          responsive={responsive}
          swipeable
          draggable={false}
          showDots
          customDot={<CustomDot />}
          infinite
          autoPlay
          autoPlaySpeed={1500}
          keyBoardControl
          transitionDuration={300}
          className="absolute inset-0 w-full h-full"
        >
          {imagesToDisplay.map((img, index) => (
            <div
              key={index}
              className="w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${img.files ? img.files[0].url : img})`
              }}
            ></div>
          ))}
        </Carousel>
      </div>
      <div className="container mx-auto px-3 py-16">
        <p
          className="text-[#a5a5a5] text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.1em",
          }}
        >
          {t("Real_estate.group")}
        </p>
        <div className="py-24">
          <Marquee>
            <img src="/assets/logo22.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo33.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo44.png" alt="" className="h-24 mr-32" />
            <img src="/assets/sx3.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo5.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo6.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo22.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo33.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo44.png" alt="" className="h-24 mr-32" />
            <img src="/assets/sx3.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo5.png" alt="" className="h-24 mr-32" />
            <img src="/assets/logo6.png" alt="" className="h-24 mr-32" />
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default Real_estate;
