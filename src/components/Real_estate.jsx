// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Marquee from "react-fast-marquee";

// const responsive = {
//   module: {
//     breakpoint: { max: 4000, min: 0 },
//     items: 1,
//   },
// };

// const Real_estate = () => {
//   const images = [
//     "/assets/carouselconst1.jpg",
//   "/assets/construction22.jpg",
//   "/assets/construction33.png",
//     "/assets/carouselconst3.jpg",
   
   
//   ];

import React , { useEffect }from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarousels } from "../actions/carousel.actions";
const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
const Real_estate = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarousels());
    // const timer = setTimeout(() => {
    //   const produitsSection = document.getElementById("produits");
    //   if (produitsSection) {
    //     produitsSection.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 10000); // 4000 millisecondes = 4 secondes

    // return () => clearTimeout(timer); // Nettoyage du timer lors du démontage
  }, [dispatch]);

  
  useEffect(() => {
		const elementIds = ["hero", "propos", "produits", "service", "temoi"]
		const scrollToElements = async () => {
			for (const id of elementIds) {
				const doc = document.getElementById(id)
				doc.scrollIntoView({ behavior: "smooth" })
				await new Promise(resolve => setTimeout(resolve, 3000))
			}
		}
		scrollToElements()
	}, [])
  const images = useSelector((state) => state.carousel.carousels)
 
  const imagesTwo = [
    "/assets/carouselconst1.jpg",
  "/assets/construction33.png",
    "/assets/carouselconst3.jpg",
   
   
  ]; 


  const imagesToDisplay = images.length > 0 ? images : imagesTwo;
  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? "active" : ""} onClick={() => onClick()}>
        <span className="dot"></span>
      </li>
    );
  };

  return (
    <main className="mb-12"  id="hero">
      <div className="relative w-full h-screen overflow-hidden">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          customDot={<CustomDot />}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          transitionDuration={300}
          className="absolute inset-0 w-full h-full"
        >
          {/* {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))} */}
          
{imagesToDisplay.map((img, index) => (
    <div
      key={index}
      className="w-full h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${
          img.files ? img.files[0].url : img
        })` 
      }}
    ></div>   ))}
        </Carousel>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.1em",
            }}
          >
            L'excellence dans <br /> chaque goutte d'eau.
          </h1>
        </div> */}
      </div>
      <div className="container mx-auto px-3 py-16">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
 
          <p
            className="text-[#a5a5a5]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.1em",
            }}
          >
        Notre Groupe
          </p>
        </span>

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
