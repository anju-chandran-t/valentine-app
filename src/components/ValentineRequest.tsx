import React, { useState } from "react";

interface Props {
  onYes: () => void;
}

const ValentineRequest: React.FC<Props> = ({ onYes }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 150 - 75;

    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-white overflow-hidden">

      <div className="w-full max-w-2xl text-center relative px-6">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
          Hi <span className="text-pink-500">Valentine Name</span> 💕
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12">
          Will you be my valentine?
        </p>

        {/* Buttons Row */}
        <div className="relative flex justify-center items-center gap-8 h-20">

          {/* Yes Button */}
          <button
            onClick={onYes}
            className="px-8 py-4 text-lg font-semibold rounded-full
                       bg-pink-500 text-white shadow-lg
                       hover:bg-pink-600 hover:scale-110
                       transition-all duration-300"
          >
            Yes 💖
          </button>

          {/* No Button */}
          <button
            onMouseEnter={moveButton}
            onClick={moveButton}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`
            }}
            className="px-8 py-4 text-lg font-semibold rounded-full
                       bg-gray-200 text-gray-700 shadow
                       hover:bg-gray-300
                       transition-all duration-300"
          >
            No 🙈
          </button>

        </div>
      </div>
    </div>
  );
};

export default ValentineRequest;
