import React from "react";

function SliderItem({ index, slide, startSlide, stopSlide }) {
  return (
    <div
      className="slide__item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img className="slide__img" src={slide.img} alt="" />
      <p className="slide__title">{slide.text}</p>
      <p className="number">{index}</p>
    </div>
  );
}

export default SliderItem;
