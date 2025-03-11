import profilePic from "../assets/batman.webp"
import { motion } from "framer-motion"
import React, { useState } from "react";
import Buttons from "./Buttons";
import Alerts from "./Alerts";
import { HERO_CONTENT } from "../constants"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: -40,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = () => {
  const [show_alert,set_show_alert] = useState(false);
  
  const givealert = () => {
    set_show_alert(true);
  }
  const closalert = () => {
    set_show_alert(false);
  }
  return (
    <div className="min-h-screen flex items-center border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0.125)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl whitespace-nowrap">
              Ishayu Ghosh
            </motion.h1>
            <motion.span 
              variants={container(0.25)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Problem Solver
            </motion.span>
            <motion.p 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max--xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img
                  initial={{x:100,opacity:0}}
                  animate={{x:40,opacity:1}}
                  transition={{duration: 0.5, delay: 0.6}}
                  src={profilePic} alt="Ishayu Ghosh">
                  
                </motion.img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
