import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food Delivery Website"
          des="A full-stack food ordering web application built with Laravel, featuring menu browsing, dynamic cart management, and streamlined order workflows. Designed with a responsive, user-centric interface for seamless cross-device engagement. Demonstrates strong backend architecture, clean routing, and scalable project structure."
          src={projectOne}
          githubLink = "https://github.com/Rutul1223/food-app"
          
        />
        <ProjectsCard
          title="NETFLIX CLONE"
          des="A responsive React-based Netflix clone showcasing dynamic content browsing, category filtering, and interactive UI patterns. Built with modern frontend tooling and Vite for efficient development workflows and performance optimization. Demonstrates hands-on experience in component architecture, state management, and user interface replication of a streaming platform."
          src={projectTwo}
          projectLink = "https://netflix-clone-omega-kohl.vercel.app/"
          githubLink = "https://github.com/Rutul1223/Netflix-clone"
        />
        <ProjectsCard
          title="Chatting App"
          des="A full-stack messaging web application built with Laravel, enabling real-time inspired chat functionality and user interaction. Designed with a clean architecture and scalable routing to support seamless message workflows. Demonstrates practical experience in backend logic, frontend integration, and project structuring."
          src={projectThree}
          githubLink = "https://github.com/Rutul1223/msgApp"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="A full-stack e-commerce platform featuring product browsing, cart workflows, and checkout integration, built with a clear separation between frontend and backend. Designed with scalable architecture to support core shopping experiences and transactional flows. Demonstrates applied expertise in JavaScript-driven interfaces and robust project structuring for commercial-style applications."
          src={projectFour}
          projectLink = "https://rabbit-ecomm-usb8.vercel.app/"
          githubLink = "https://github.com/Rutul1223/Rabbit-Ecomm"
        />
        <ProjectsCard
          title="YOUTUBE CLONE"
          des="A responsive YouTube-style web application built with modern frontend technologies to replicate core video browsing and interaction patterns. Features dynamic content rendering, search capability, and a user-centric interface inspired by the original platform. Demonstrates proficiency in component architecture, state management, and API integration for rich media applications."
          src={projectFive}
          projectLink = "https://video-tube-mu-nine.vercel.app/"
          githubLink = "https://github.com/Rutul1223/youtube-clone"
        />
      </div>
    </section>
  );
}

export default Projects
