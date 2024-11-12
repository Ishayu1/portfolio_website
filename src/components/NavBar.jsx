import React, { useState } from "react";
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Buttons from "./Buttons";
import { animate } from "framer-motion";



const NavBar = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com", label: "LinkedIn" },
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
        { icon: <FaInstagram />, url: "https://www.instagram.com", label: "Instagram" }
      ];
    
    const [showCount, setShowCount] = useState(0);
    const [highest_count, setHighest_count] = useState(0);
    const handleClick = () => {
      setShowCount(showCount + 1);
    }
    const resetClick = () => {
      if (showCount > highest_count) {
        setHighest_count(showCount);
      }
      setShowCount(showCount => 0);
    }
  return (
    <nav className="mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <h1 style={{ fontSize: "3rem" }}>IG</h1>
      </div>
      <Buttons onClick={handleClick}>Counter for fun: {showCount}</Buttons>
      <Buttons onClick={resetClick}>Reset count</Buttons>
      <h2>Highest count: {highest_count}</h2>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map(({ icon, url, label }, index) => (
            <a 
                key={index} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-300 hover:text-cyan-400 hover:shadow-lg hover:scale-110 hover:shadow-cyan-500/50 transition-all duration-300"

            >
                {icon}
            </a>
            ))}
      </div>
    </nav>
  );
};

export default NavBar;
