
import React, { useState } from 'react';

function Featured() {
  const [text, setText] = useState(null); // state to hold the text value to display

  const handleMouseMove = (event) => {
    const { clientX, currentTarget } = event; // Get the mouse X position and the container's position
    const containerWidth = currentTarget.offsetWidth; // The width of the container (the cards area)

    // If the mouse is on the left side, show "FYDE", if on the right side, show "VISE"
    if (clientX < containerWidth / 2) {
      setText('FYDE');
    } else {
      setText('VISE');
    }
  };

  return (
    <div data-scroll data-scroll-section className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div
          className="cards w-full flex gap-10 mt-10"
          onMouseMove={handleMouseMove} // Handle mouse move
        >
          {/* Left Image */}
          <div className="card container relative w-1/2 h-[75vh]">
            {text === 'FYDE' && (
              <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                FYDE
              </h1>
            )}
            <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Fyde"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="card container relative rounded-xl w-1/2 h-[75vh]">
            {text === 'VISE' && (
              <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                VISE
              </h1>
            )}
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Vise"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
