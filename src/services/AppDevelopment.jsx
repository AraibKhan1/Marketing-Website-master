import React, { useState } from "react";
import Template from "./Template";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Modal from "react-modal";

const Animation = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=App+Dev+1",
    "https://via.placeholder.com/300x200?text=App+Dev+2",
    "https://via.placeholder.com/300x200?text=App+Dev+3",
    "https://via.placeholder.com/300x200?text=App+Dev+4",
    "https://via.placeholder.com/300x200?text=App+Dev+5",
    "https://via.placeholder.com/300x200?text=App+Dev+6",
  ];

  const youtubeVideoIds = [
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
    "dQw4w9WgXcQ",
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideoId(null);
  };

  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template  title="ANIMATION" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {youtubeVideoIds.map((videoId, index) => (
            <div key={index} className="relative">
              <img
                src={`http://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt={`YouTube Video ${index + 1}`}
                className="w-full rounded-lg cursor-pointer"
                onClick={() => openModal(videoId)}
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-4 text-white hover:bg-opacity-70"
                onClick={() => openModal(videoId)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.506.865v6.764a1 1 0 001.506.865l3.197-2.132a1 1 0 000-1.73zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video Modal"
        className="Modal"
        overlayClassName="Overlay"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            padding: "0",
            border: "none",
            background: "transparent",
          },
        }}
      >
        {selectedVideoId && (
          <div className="relative">
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </Modal>
      <div className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
      <Footer />
      </div>
      
    </div>
  );
};

export default Animation;