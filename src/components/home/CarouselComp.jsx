import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
  const sliderImg = ["baner1.jpg", "baner2.jpg", "baner3.jpg", "baner4.jpg"];

  return (
    <Carousel
      autoPlay
      navButtonAlwaysVisible
      infiniteLoop
      emulateTouch
      showStatus={false}
      showThumbs={false}
    >
      {sliderImg.map((image, i) => {
        return (
          <div
            key={i}
            style={{ maxHeight: "40rem" }}
            className="object-center brightness-60"
          >
            <img src={image} alt="pizza" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
