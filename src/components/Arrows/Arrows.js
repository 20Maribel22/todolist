import React from 'react'

function Arrows({prevSlide, nextSlide}) {
  return (
    <div className='arrows'>
        <span className="slide__button slide__button-left" onClick={prevSlide}>&lsaquo;</span>
        <span className="slide__button slide__button-right" onClick={nextSlide}>&rsaquo;</span>
    </div>
  )
}

export default Arrows