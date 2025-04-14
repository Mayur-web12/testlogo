import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

const slides = [
    { title: "Slide 1", text: "Lorem ipsum dolor sit amet." },
    { title: "Slide 2", text: "Lorem ipsum dolor sit amet." },
    { title: "Slide 3", text: "Lorem ipsum dolor sit amet." },
    { title: "Slide 4", text: "Lorem ipsum dolor sit amet." },
    { title: "Slide 5", text: "Lorem ipsum dolor sit amet." },
  ];
const SliderTwo = () => {
    const trackRef = useRef(null);
    const slideRef = useRef(null);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
  
    const getSlidesPerView = () => {
      const width = window.innerWidth;
      if (width <= 768) return 1;
      if (width <= 1200) return 2;
      return 4;
    };
  
    const startAutoSlide = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setIndex((prev) => {
          const slidesPerView = getSlidesPerView();
          const maxIndex = slides.length - slidesPerView;
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 3000);
    };
  
    useEffect(() => {
      startAutoSlide();
  
      const handleResize = () => {
        setIndex(0);
        startAutoSlide();
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        clearInterval(intervalRef.current);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      const slideWidth = slideRef.current?.offsetWidth || 0;
      const gap = 20;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
      }
    }, [index]);
  
  return (
    <>
     <section className="sliders-two">
      <div className="container">
        <div className="slider-container-one">
          <div className="slider-track" ref={trackRef}>
            {slides.map((slide, i) => (
              <div className="slide-two" key={i} ref={i === 0 ? slideRef : null}>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <Link href="#">Know More <span><i className="fa-regular fa-chevron-right"></i></span></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SliderTwo