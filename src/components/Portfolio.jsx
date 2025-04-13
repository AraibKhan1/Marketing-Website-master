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

      {/* YouTube Thumbnails */}
      <div className="flex flex-col justify-center items-center lg:gap-6 gap-3 p-5 mb-10">
        {/* Row 1 */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row lg:gap-6 gap-3">
          <PortfolioProduct youtubeId="7FA01RDlGY4" /> {/* Rick Astley - Never Gonna Give You Up */}
          <PortfolioProduct youtubeId="dpXOR2GeL6k" /> {/* Alan Walker - Faded */}
          <PortfolioProduct youtubeId="kABq7v7fsLk" /> {/* Imagine Dragons - Believer */}
        </div>

        {/* Row 2 */}
        <div data-aos="fade-left" className="md:flex lg:gap-6 gap-3 hidden">
          <PortfolioProduct youtubeId="T9u-FswnOpI" /> {/* Childish Gambino - This is America */}
          <PortfolioProduct youtubeId="N57tsWYuBXI" /> {/* The Chainsmokers & Coldplay - Something Just Like This */}
          <PortfolioProduct youtubeId="RMf9kggtJM8" /> {/* Random video */}
        </div>
       
       
        
      </div>
    </div>
  );
};

export default Portfolio;
