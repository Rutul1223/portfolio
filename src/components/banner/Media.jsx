import React from 'react'
import {  FaLinkedinIn, FaReact, FaInstagram, FaGithub } from "react-icons/fa";
import {  SiNextdotjs, SiLaravel, SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://www.instagram.com/rutul_1223/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://github.com/Rutul1223" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/rutul-prajapati-574125236/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaReact />
            </span>
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            </a>
            <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiLaravel />
            </span>
            </a>
            <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media