import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useRef, useState } from "react";
import Arrows from "../Arrows/Arrows";
import Dots from "../Dots/Dots";
// import Number from "../Number/Number";
import SliderItem from "../SliderItem/SliderItem";
import "./Slider.css";

function Slider({ slides, delay = 3000, navs=false, pags=false, auto=true  }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if(auto) {
        stopSlideTimer();
        slideInterval.current = setInterval(() => {
          setCurrentSlide((currentSlide) =>
            currentSlide < slides.length - 1 ? currentSlide + 1 : 0
          );
        },delay );
    }
    
  };

  const stopSlideTimer = () => {
    if (auto && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div className="slide__container">
      <div className="slide">
        <div
          className="slide__inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
            
          {slides.map((slide, index) => (
            <SliderItem
              index={index}
              slide={slide}
              key={index}
              stopSlide={stopSlideTimer}
              startSlide={startSlideTimer}
            />
            
          ))}
             
        </div>
        {navs &&<Arrows prevSlide={prev} nextSlide={next} />}
        {pags && <Dots
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />}
        
      </div>
    </div>
  );
}

export default Slider;
           
  