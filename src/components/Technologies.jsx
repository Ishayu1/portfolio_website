import { RiReactjsLine } from "react-icons/ri"
import { FaJava, FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {motion} from "framer-motion"
import { FaC } from "react-icons/fa6";

const iconVariants = (duration) => ({
    inital: {y:-10},
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  })

const Technologies = () => {
    const techIcons = [
        { icon: <RiReactjsLine className="text-7xl" />, label: "React" ,duration:1.25},
        { icon: <FaPython className="text-7xl text-green-500" />, label: "Python" ,duration:1.5},
        { icon: <FaDatabase className="text-7xl text-red-700" />, label: "Database" ,duration:3},
        { icon: <DiJavascript1 className="text-7xl text-sky-700" />, label: "JavaScript" ,duration:2},
        { icon: <FaJava className="text-7xl text-sky-700" />, label: "Java" ,duration:1.75},
      ];
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20  text-center text-4xl">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity:1, x: 0}} 
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map((tech, index) => (
          <motion.div 
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            key={index} className="rounded-2xl border-4 border-neutral-800 p-4">
            {tech.icon}
          </motion.div>
        ))}
        </motion.div>
    </div>
  )
}

export default Technologies