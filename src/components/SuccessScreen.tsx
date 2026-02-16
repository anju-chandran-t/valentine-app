import React from "react";

const SuccessScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-white px-6">

      {/* Text Section */}
      <div className="text-center max-w-4xl mx-auto">

        {/* Main Heading */}
        <h1 className="main-title">
          Happy Valentines Day ❤️
        </h1>

        {/* Name */}
        <h2 className="name">
          Dear Valentine Name
        </h2>

        {/* Divider */}
        <div className="w-40 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>

        {/* Message */}
        <p className="text-lg sm:text-xl md:text-2xl italic text-gray-700 mb-10">
          I will be there with you forever.
        </p>
      </div>

      {/* Image Section (Full viewport width control) */}
      <div className="flex justify-center w-screen mt-8">
        <img
          src="/ValentineImage.jpg"
          alt="Image of us"
          style={{
            maxWidth: "80%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>

    </div>
  );
};

export default SuccessScreen;
