import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import video from "../img/video/Dremie.mp4";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slidesData = [
    { title: "Let Us", subtitle: "Tell Your Story" },
    { title: "We Craft Captivating Visuals", subtitle: "That Resonate with Your Audience" },
    { title: "Empower Your Brand With", subtitle: "Compelling Visual Content" },
  ];

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subtitleRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
    );
  }, [slideIndex]);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  return (
    <div ref={sliderRef} className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <video src={video} autoPlay muted loop className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center">
        <h1 ref={titleRef} className="text-white md:text-5xl text-3xl font-bold leading-tight">
          {slidesData[slideIndex].title}
        </h1>
        <h2 ref={subtitleRef} className="text-white text-xl mt-5 primary-font leading-relaxed">
          {slidesData[slideIndex].subtitle}
        </h2>
        <div className="flex justify-center mt-10">
          <a href="#contact" className="mr-5">
            <CtaButton name="Get a Free Consultation" />
          </a>
          {/* Showreel Button to Toggle Video */}
        
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer text-white" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer text-white" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;