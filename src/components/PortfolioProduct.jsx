import { motion } from "framer-motion";
import "../index.css";



const PortfolioProduct = ({ youtubeId }) => {
  const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const youtubeLink = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <div className="w-[26rem] overflow-hidden hover:cursor-pointer relative group transition-all duration-300">
      {/* YouTube Video Thumbnail */}
      <motion.img
        src={youtubeThumbnail}
        className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        alt="YouTube Video Thumbnail"
        whileHover={{ scale: 1.05 }}
      />

      {/* Play Button with Animation */}
      <a
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          className="bg-black bg-opacity-60 p-5 rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
            whileHover={{ scale: 1.3 }}
          >
            <path d="M8 5v14l11-7z" />
          </motion.svg>
        </motion.div>
      </a>
    </div>
  );
};

export default PortfolioProduct;
