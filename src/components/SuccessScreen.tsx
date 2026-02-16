import React from "react";

const SuccessScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-white px-6">

      <div className="text-center max-w-4xl">

        {/* Heart */}
        <div className="text-red-500 text-6xl mb-6">
          ❤️
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
          Happy <br />
          Valentines Day
        </h1>

        {/* Name */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-500 mb-8">
          Dear Remo
        </h2>

        {/* Divider */}
        <div className="w-40 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>

        {/* Message */}
        <p className="text-lg sm:text-xl md:text-2xl italic text-gray-700 mb-10">
          I will be there with you forever.
        </p>

        {/* Image Below Message */}
        <div className="flex justify-center">
          <img
            src="/ValentineImage.jpg"
            alt="Image of us"
            className="rounded-3xl shadow-2xl max-h-[400px] object-cover border-4 border-white"
          />
        </div>

      </div>
    </div>
  );
};

export default SuccessScreen;
