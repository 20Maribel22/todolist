import React from 'react'

function Dots({slides, currentIndex, switchIndex }) {
  return (
    <div className='dots__container'>
    {slides.map((_, index)=>(
      <button className={`dots__item${currentIndex === index ? ' active' : ''}`} key={index}
      onClick={() => switchIndex(index)}
      ></button>
    ))}
    </div>
  )
}

export default Dots