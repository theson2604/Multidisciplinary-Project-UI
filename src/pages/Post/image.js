import React, { useState } from 'react';
import "./index.css";
import {IoCaretBackCircleOutline, IoCaretForwardCircleOutline} from "react-icons/io5";

const ImageSlider = ({ slides }) => {
  console.log(slides)
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <IoCaretBackCircleOutline className='left-arrow' onClick={prevSlide} />
            <IoCaretForwardCircleOutline className='right-arrow' onClick={nextSlide} />
            {index === current && (
              <img src={slide} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;