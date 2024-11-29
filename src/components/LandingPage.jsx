import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            <div className='masker'>
                <h1 className="uppercase text-7xl leading-[5.5vw] tracking-tighter font-['Founders_Grotesk'] font-medium">We Create </h1>
            </div> 
            <div className='masker'>
                {/* <div className="w-fit flex items-center">
                    {index === 1 && (<div className="w-[9vw] h-[5vw]"></div>)}
                </div> */}
                <h1 className="uppercase text-7xl leading-[5.5vw] tracking-tighter font-['Founders_Grotesk'] font-medium">Eye Opening </h1>
            </div>
            <div className='masker'>
                  {/* { <div className="w-fit flex items-center">
                    {index === 1 && (<div className="w-[9vw] h-[5vw]"> </div>)}
                </div> } */}



                <h1 className="uppercase text-7xl leading-[5.5vw] tracking-tighter font-['Founders_Grotesk'] font-medium">Presentations </h1>
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(<p className="text-md font-light tracking-tight leading-none">{item}</p>))}

            </div>
            <div className="start flex items-center gap-5">
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">start the project</div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                    <span className="rotate-[45deg]">
                    <FaArrowUpLong />
                    </span>
                </div>
            
        </div>
      
    </div>
  );
}

export default LandingPage
