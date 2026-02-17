import React from "react";

const SuccessScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-100"
        style={{
          backgroundImage: "url('/ValentineImage.jpg')"
        }}
      />

      {/* Dark Elegant Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Top Heart */}
        <div className="text-red-500 text-7xl mb-6 drop-shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          ❤️
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-white leading-tight mb-6">
          Happy <br />
          Valentines Day
        </h1>

        {/* Highlight Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-pink-300 mb-10 tracking-wide">
          Dear Valentine
        </h2>

        {/* Elegant Divider */}
        <div className="w-40 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 italic font-serif leading-relaxed">
          I will be there with you forever.
        </p>

        {/* Bottom Icons */}
        <div className="flex justify-center items-center gap-10 mt-16 text-4xl">
          ✨ 🤍 ❤️ ✨
        </div>

      </div>
    </div>
  );
};

export default SuccessScreen;
