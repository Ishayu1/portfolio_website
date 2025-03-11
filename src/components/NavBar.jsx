import React, { useState } from "react";
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Buttons from "./Buttons";
import { animate } from "framer-motion";
import CounterGame from "./CounterGame.jsx";
import { Link, useLocation} from "react-router-dom";



const NavBar = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ishayughosh", label: "LinkedIn" },
        { icon: <FaGithub />, url: "https://github.com/Ishayu1", label: "GitHub" },
        { icon: <FaInstagram />, url: "https://www.instagram.com", label: "Instagram" }
      ];

    const location = useLocation();
    

  return (
    <nav className="mt-8 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <h1 style={{ fontSize: "3rem" }}>IG</h1>
      </div>
      {/* <Buttons onClick={handleClick}>Counter for fun: {showCount}</Buttons>
      <Buttons onClick={resetClick}>Reset count</Buttons>
      <h2>Highest count: {highest_count}</h2> */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map(({ icon, url, label }, index) => (
            <a 
                key={index} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-300 hover:text-cyan-400 hover:shadow-lg hover:scale-110 hover:shadow-white-500/50 transition-all duration-300"

            >
                {icon}
            </a>
            ))}
      </div>
    </nav>
  );
};

export default NavBar;
