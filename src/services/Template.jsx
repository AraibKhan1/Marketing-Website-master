import React from "react";

const Template = ({ images, title }) => { // Accept images array and title
  return (
    <>
      <div className="secondary-font">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center my-8 uppercase">
            {title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images &&
              images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;