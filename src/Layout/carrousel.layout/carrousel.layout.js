import React, { useState } from 'react';
import previous from "../../Shared/assets/precedent.png"
import next from "../../Shared/assets/suivant.png"

function Carrousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (pictures && pictures.length > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        }
    };
      
    const prevSlide = () => {
        if (pictures && pictures.length > 0) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) return pictures.length - 1;
            return prevIndex - 1;
          });
        }
    };

  return (
    <div className='carousel_container'>
      <div>
        {(pictures && pictures.length > 1) ? <button onClick={prevSlide} className='previous'><img src={previous} alt="précédent"/></button> : null}
        {pictures && <img src={pictures[currentIndex]} alt={`slide ${currentIndex + 1}`} />}
        {(pictures && pictures.length > 1) ? <div className='compteur_carousel'><p>{currentIndex + 1}/{pictures.length}</p></div> : null}
        {(pictures && pictures.length > 1) ? <button onClick={nextSlide} className='next'><img src={next} alt="suivant"/></button> : null}
      </div>
    </div>
  );
}
  
  export default Carrousel;