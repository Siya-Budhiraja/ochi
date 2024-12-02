// import React from 'react';
//  function Ready() {
//      return (
//       <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
//          <h1 className="font-['Neue_Montreal'] text-[4vw] sm:text-[5vw] md:text-[1vw] lg:text-[8vw] xl:text-[9vw] leading-[4vw] tracking-tight py-5">
//            Ready To Start The Project?
//          </h1>
//        </div>
//      );
//   }
  
 // export default Ready;
// import React from 'react';

// function Ready() {
//   return (
//     <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black max-w-4xl mx-auto">
//       <h1 className="font-['Neue_Montreal'] text-[9vw] leading-[4.5vw] tracking-tight py-5">
//         Ready To Start The Project?
//       </h1>
//     </div>
//   );
// }

// export default Ready;
// import React from 'react';
// function Ready() {
//     return (
//         <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black max-w-4xl mx-auto">   
// <h1 className="font-['Neue_Montreal'] text-[7vw] sm:text-[8vw] md:text-[6vw] lg:text-[6vw] xl:text-[5vw] leading-[1.2] tracking-tight py-5 mb-4 text-center">
//   Ready To Start The
// </h1>
// <h1 className="font-['Neue_Montreal'] text-[7vw] sm:text-[8vw] md:text-[6vw] lg:text-[6vw] xl:text-[5vw] leading-[1.2] tracking-tight py-5 text-center">
//   Project?
// </h1>
// <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Start the Project
//                 <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
//                </button>
// </div>
// );
// }
// import React, { useState, useEffect } from 'react';

// function Ready() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Track cursor position
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative">
//       <h1 className="font-['Neue_Montreal'] text-[5vw] sm:text-[6vw] md:text-[6vw] lg:text-[7vw] xl:text-[7vw] leading-[1.2] tracking-tight py-5 text-center z-10">
//         Ready To Start The <br />
//         Project?
//       </h1>
//       {/* Eyes container */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-0">
//         {/* Left Eye */}
//         <div className="w-16 h-16 bg-white rounded-full border-4 border-black mx-4">
//           <div
//             className="w-6 h-6 bg-black rounded-full"
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: `translate(-50%, -50%) translate(${cursorPosition.x / 25}px, ${cursorPosition.y / 25}px)`,
//             }}
//           ></div>
//         </div>
//         {/* Right Eye */}
//         <div className="w-16 h-16 bg-white rounded-full border-4 border-black mx-4">
//           <div
//             className="w-6 h-6 bg-black rounded-full"
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: `translate(-50%, -50%) translate(${cursorPosition.x / 25}px, ${cursorPosition.y / 25}px)`,
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Ready;
// import React, { useState, useEffect } from 'react';

// function Ready() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Track cursor position
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative">
//       <h1 className="font-['Neue_Montreal'] text-[5vw] sm:text-[6vw] md:text-[6vw] lg:text-[7vw] xl:text-[7vw] leading-[1.2] tracking-tight py-5 text-center z-10">
//         Ready To Start The <br />
//         Project?
//       </h1>

//       {/* Eyes container */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-0">
//         {/* Big Circle (Outer Eye) */}
//         <div className="w-32 h-32 bg-white rounded-full border-4 border-black relative mx-4">
//           {/* Inner Circle (Eye) */}
//           <div className="w-24 h-24 bg-white rounded-full border-4 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {/* Small Circle (Pupil) that moves with cursor */}
//             <div
//               className="w-8 h-8 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
//               }}
//             ></div>
//           </div>
//         </div>
//         {/* Second Eye (Big Circle on Right) */}
//         <div className="w-32 h-32 bg-white rounded-full border-4 border-black relative mx-4">
//           {/* Inner Circle (Eye) */}
//           <div className="w-24 h-24 bg-white rounded-full border-4 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {/* Small Circle (Pupil) that moves with cursor */}
//             <div
//               className="w-8 h-8 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';

// function Ready() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Track cursor position
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative">
//       <h1 className="font-['Neue_Montreal'] text-[5vw] sm:text-[6vw] md:text-[6vw] lg:text-[7vw] xl:text-[7vw] leading-[1.2] tracking-tight py-5 text-center z-10">
//         Ready To Start The <br />
//         Project?
//       </h1>

//       {/* Eyes container */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-0">
//         {/* Left Eye */}
//         <div className="w-32 h-32 bg-white rounded-full border-4 border-black relative mx-4">
//           {/* Inner Circle (Eye) */}
//           <div className="w-24 h-24 bg-white rounded-full border-4 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {/* Small Circle (Pupil) that moves with cursor */}
//             <div
//               className="w-8 h-8 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
//               }}
//             ></div>
//           </div>
//         </div>
//         {/* Middle Eye (Black Eye with White Pupil) */}
//         <div className="w-32 h-32 bg-black rounded-full border-4 border-black relative mx-4">
//           {/* Inner Circle (Eye) */}
//           <div className="w-24 h-24 bg-black rounded-full border-4 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {/* Small Circle (Pupil) that moves with cursor */}
//             <div
//               className="w-8 h-8 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
//               }}
//             ></div>
//           </div>
//         </div>
//         {/* Right Eye */}
//         <div className="w-32 h-32 bg-white rounded-full border-4 border-black relative mx-4">
//           {/* Inner Circle (Eye) */}
//           <div className="w-24 h-24 bg-white rounded-full border-4 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {/* Small Circle (Pupil) that moves with cursor */}
//             <div
//               className="w-8 h-8 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Ready;
import React, { useState, useEffect } from 'react';

function Ready() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative">
      <h1 className="font-['Neue_Montreal'] text-[5vw] sm:text-[6vw] md:text-[6vw] lg:text-[7vw] xl:text-[7vw] leading-[1.2] tracking-tight py-5 text-center z-10">
        Ready To Start The Project ? <br />
        Project?
      </h1>
      <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Start the Project
               <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>

      {/* Eyes container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-0 space-x-10">
        {/* Left Eye */}
        <div className="w-32 h-32 bg-white rounded-full border-4 border-black relative">
          {/* Middle Eye (Black Circle) */}
          <div className="w-24 h-24 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Pupil (Smallest Circle - White) */}
            <div
              className="w-8 h-8 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
              }}
            ></div>
          </div>
        </div>

        {/* Right Eye */}
        <div className="w-32 h-32 bg-white rounded-full border-4 border-black relative">
          {/* Middle Eye (Black Circle) */}
          <div className="w-24 h-24 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Pupil (Smallest Circle - White) */}
            <div
              className="w-8 h-8 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${(cursorPosition.x - window.innerWidth / 2) / 25}px, ${(cursorPosition.y - window.innerHeight / 2) / 25}px)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
