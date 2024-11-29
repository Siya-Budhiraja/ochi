
import React, { useState, useEffect } from 'react';

function Eye({ mousePosition }) {
  const [eyePosition, setEyePosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const eyeX = (mousePosition.x - window.innerWidth / 2) / window.innerWidth * 100;
    const eyeY = (mousePosition.y - window.innerHeight / 2) / window.innerHeight * 100;
    setEyePosition({ x: `${50 + eyeX}%`, y: `${50 + eyeY}%` });
  }, [mousePosition]);

  return (
    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
      <div
        className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'
        style={{ transform: `translate(${eyePosition.x}, ${eyePosition.y})` }}
      >
        <div className="line w-full h-10"></div>
        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
      </div>
    </div>
  );
}

function Eyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-cover bg-center'>
          <Eye mousePosition={mousePosition} /> {/* First eye */}
          <Eye mousePosition={mousePosition} /> {/* Second eye */}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
