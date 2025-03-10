import aboutimg from "../assets/about.jpg"
import { motion } from "framer-motion"

const About = () => { 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity: 0, x:-100}}
            transition={{duration: 0.5}}
            className="flex items-center justify-center">
            <img 
              className="rounded-2xl" src={aboutimg} alt="about">
            </img>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
              <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity: 0, x:100}}
                transition={{duration: 0.5}}                
                className="flex justify-center lg:justify-start">
                <p className="my-2 maxw-xl py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta omnis eaque architecto in tempore magni ut dignissimos, commodi optio iusto explicabo vero doloremque similique, sed natus perspiciatis eligendi voluptatem. Fugit.</p>
              </motion.div>
          </div>
      </div>
    </div>
  )
}

export default About