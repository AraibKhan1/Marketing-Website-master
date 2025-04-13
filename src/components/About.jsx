import { useEffect } from 'react';
import CtaButton from './CtaButton';
import img from '../img/about-img.svg';
import { BsPeople } from 'react-icons/bs';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  });

  return (
    <div className="relative lg:mx-32">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center text-[#7A6960]">
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div data-aos="fade-up" className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
          <img className="w-full" src={img} alt="img" />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h1 className="text-[#7A6960] md:text-3xl font-semibold">
            Bringing Your Vision to Life with Stunning Commercial            </h1>
            <p className="text-lg mt-5 text-gray-600 primary-font">
            We specialize in high-quality Commercial, video editing, and visual storytelling. Our goal is to create engaging and professional content that leaves a lasting impact.

            </p>
          </div>

          {/* 1st template */}
          <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
            <div className="bg-orange-600 w-fit p-2 md:p-5 rounded" style={{ color: 'white' }}>
              <BsPeople size={'28px'} />
            </div>
            <div className="w-full">
              <h3 className="text-[#7A6960] text-xl font-medium">Professional Video Editing</h3>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Transforming raw footage into engaging, high-quality videos.
              </p>
            </div>
          </div>

          {/* 2nd template */}
          <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
            <div className="bg-orange-600 w-fit p-2 md:p-5 rounded" style={{ color: 'white' }}>
              <BsPeople size={'28px'} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">Motion Graphics & Animations</h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Bringing ideas to life with smooth and eye-catching animations.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">
            <div className="bg-orange-600 w-fit p-2 md:p-5 rounded" style={{ color: 'white' }}>
              <BsPeople size={'28px'} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">Branding & Promotional Videos</h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Crafting visually appealing content to elevate your brand’s presence.
              </p>
            </div>
          </div>

          {/* para */}
          <p data-aos="zoom-in" className="text-lg mt-5 text-gray-600 primary-font"></p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-5">
            <div>
              <a href="#contact" className="">
                <CtaButton name={'Get Started'} />
              </a>
            </div>
            {/* <div
              onClick={() => videoStartHandler()}
              className="shadow shadow-zinc-300 hover:shadow-orange-600 hover:shadow px-4 py-2 rounded-3xl"
            >
              <VideoBtn name={"Watch Video"} />
            </div> */}
          </div>

          {/* <div
            className={`${
              show ? "block" : "hidden"
            } absolute right-0 top-0 lg:w-full lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}
          >
            <div
              onClick={() => clickHandler()}
              className="absolute right-10 top-6 text-3xl font-light bg-zinc-700 px-3 rounded-full text-white cursor-pointer"
            >
              x
            </div>
            <video
              id="video"
              muted
              controls
              autoPlay
              className="w-[800px] rounded"
              src={video}
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
