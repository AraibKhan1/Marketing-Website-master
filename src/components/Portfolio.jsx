import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioProduct from "./PortfolioProduct";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-[#ffffff]">
      <h1 className="text-3xl font-semibold text-center">Best Work</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-white-700 text-center mt-7 mb-10 text-lg">
        Explore Our Live Courses & Make Bharat ka Career Launchpad
      </p>

      {/* YouTube Thumbnails */}
      <div className="flex flex-col justify-center items-center lg:gap-6 gap-3 p-5 mb-10">
        {/* Row 1 */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row lg:gap-6 gap-3">
          <PortfolioProduct youtubeId="cFQ6olDpbqc" /> {/* Rick Astley - Never Gonna Give You Up */}
          <PortfolioProduct youtubeId="3JZ_D3ELwOQ" /> {/* Alan Walker - Faded */}
          <PortfolioProduct youtubeId="L_XJ_s5IsQc" /> {/* Imagine Dragons - Believer */}
        </div>

        {/* Row 2 */}
        <div data-aos="fade-left" className="md:flex lg:gap-6 gap-3 hidden">
          <PortfolioProduct youtubeId="VYOjWnS4cMY" /> {/* Childish Gambino - This is America */}
          <PortfolioProduct youtubeId="60ItHLz5WEA" /> {/* The Chainsmokers & Coldplay - Something Just Like This */}
          <PortfolioProduct youtubeId="ZkaG2lL7dD4" /> {/* Random video */}
        </div>
       
        <div data-aos="fade-left" className="md:flex lg:gap-6 gap-3 hidden">
          <PortfolioProduct youtubeId="VYOjWnS4cMY" /> {/* Childish Gambino - This is America */}
          <PortfolioProduct youtubeId="60ItHLz5WEA" /> {/* The Chainsmokers & Coldplay - Something Just Like This */}
          <PortfolioProduct youtubeId="ZkaG2lL7dD4" /> {/* Random video */}
        </div> 
        
      </div>
    </div>
  );
};

export default Portfolio;
