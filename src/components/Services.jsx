import  { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-[#7A6960]">
  <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
    Services
  </h1>
  <div className="flex justify-center items-center mt-2">
    <div className="bg-orange-600 h-1 w-16 rounded"></div>
  </div>
  <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
    Choose from live online courses, classroom training, or self-paced
    online programs.
  </p>
  <div
    className="flex flex-col lg:flex-row items-center gap-5"
    data-aos="fade-up"
  >
  <div onClick={() => navigate("/Marketing-Website/commercials")}>
      <Card
        img={<HiOutlineChartPie />}
        title={"Commercials"}
        desc={
          "Hign Impact commercial edits that elevate your brand and drive result"
        }
      />
    </div>
    <div onClick={() => navigate("/Marketing-Website/animation")}>
      <Card
        img={<HiOutlineChartPie />}
        title={"Animation and Motion Graphics"}
        desc={
          "Bring your ideas to life with high-quality 2D & 3D animations designed to engage and inspire."
        }
      />
    </div>

    <div onClick={() => navigate("/Marketing-Website/editing")}>
      <Card
        img={<HiOutlineChartPie />}
        title={"Studio-Cut Edits"}
        desc={
          "Professional video editing services to enhance your content and captivate your audience."
        }
      />
    </div>

    

    {/* <div onClick={() => navigate("/campagin-creation")}>
      <Card
        img={<HiOutlineChartPie />}
        title={"Campaign Creation"}
        desc={
          "End-to-end campaign strategies that drive results through innovative content and design."
        }
      />
    </div> */}
  </div>
</div>
  );
};

export default Services;
