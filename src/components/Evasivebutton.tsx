import React, { useState, useRef, useCallback } from 'react';

const EvasiveButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleEvade = useCallback(() => {
    // Generate a random position within a reasonable range from the center
    // We want it to stay mostly visible but hard to catch
    const range = 250;
    const newX = (Math.random() - 0.5) * range * 2;
    const newY = (Math.random() - 0.5) * range * 2;

    setPosition({ x: newX, y: newY });
    setHasMoved(true);
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleEvade}
      onClick={handleEvade} // Just in case they somehow click it
      style={{
        transform: hasMoved ? `translate(${position.x}px, ${position.y}px)` : 'none',
        transition: 'all 0.1s ease-out',
        position: hasMoved ? 'absolute' : 'relative'
      }}
      className="px-10 py-4 bg-gray-200 hover:bg-gray-300 text-gray-600 text-xl font-bold rounded-full shadow-md focus:outline-none whitespace-nowrap"
    >
      No <i className="fa-solid fa-xmark ml-2"></i>
    </button>
  );
};

export default EvasiveButton;
