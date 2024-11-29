
import { motion } from 'framer-motion'
import React from 'react'
function Marquee() {
    
  return (
      <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-["Founders_Grotesk"] uppercase pt-8 -mb-[3vw] font-sm'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-["Founders_Grotesk"] uppercase pt-8 -mb-[3vw] font-sm'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[17vw] leading-none font-["Founders_Grotesk"] uppercase pt-8 -mb-[3vw] font-sm'>we are ochi</motion.h1>
        </div>
        
    </div>
  )
}

export default Marquee
