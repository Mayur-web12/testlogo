import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const slidesData = [
    {
      title: 'Lorem ipsum',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      img: 'logo/digital-designers.png'
    },
    {
      title: 'Second Slide',
      desc: 'Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.',
      img: 'logo/img-logo2.png'
    },
    {
      title: 'Third Slide',
      desc: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      img: 'logo/img1-logo.png'
    }
  ];

const SliderOne = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);
    const startXRef = useRef(0);
  
    useEffect(() => {
      startAutoplay();
      return () => clearInterval(slideInterval.current);
    }, []);
  
    const startAutoplay = () => {
      slideInterval.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % slidesData.length);
      }, 4000);
    };
  
    const resetAutoplay = () => {
      clearInterval(slideInterval.current);
      startAutoplay();
    };
  
    const handleDotClick = (index) => {
      setCurrentIndex(index);
      resetAutoplay();
    };
  
    const handleTouchStart = (e) => {
      startXRef.current = e.touches[0].clientX;
    };
  
    const handleTouchMove = (e) => {
      if (!startXRef.current) return;
      const endX = e.touches[0].clientX;
      const diffX = startXRef.current - endX;
  
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          setCurrentIndex((prev) => (prev + 1) % slidesData.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
        }
        resetAutoplay();
        startXRef.current = 0;
      }
    };
  
  return (
    <>
 <section>
      <div className="container">
        <div
          className="slider-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="slides-wrapper">
            {slidesData.map((slide, index) => (
              <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                <div className="text-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <Link href="#" className="btn">Know More ▶</Link>
                </div>
                <div className="image-content">
                  <img src={slide.img} alt={`Slide ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="dots-container">
            {slidesData.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SliderOne