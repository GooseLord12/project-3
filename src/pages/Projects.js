import React from "react";
import { motion } from "framer-motion";
import homeImg from "../assets/Homepage.png";
import dogImg from "../assets/dog.png";
import gameImg from "../assets/game knight.png";
const projects = [
  {
    title: "Comet Tales",
    description:
      "A user-centered educational application on which I served as a lead UI/UX designer and project editor!",
    image: homeImg,
    link: "https://www.figma.com/proto/gsPqmIZWVUKxvTAiO5MpNq/high-fid-prototype?page-id=0%3A1&node-id=105-1048&p=f&viewport=449%2C336%2C0.09&t=7A289Om4McJTGW1S-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=105%3A1048",
  },
  {
    title: "Kennel",
    description: "A prototype for a social pet-care app that I designed!",
    image: dogImg,
    link: "https://www.figma.com/proto/K4lPQEvy5VpgUHEemaQ5li/Untitled?node-id=28-469&p=f&t=QQ0fTYdzWPDyKZ3x-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=28%3A469",
  },
  {
    title: "UCF Game Knight Poster",
    description:
      "A graphic design poster that I designed for my job as a Resident Assistant at UCF!",
    image: gameImg,
    link: "https://www.canva.com/design/DAF5IGwkoCc/teRkBqictPRE8i2YD-660w/edit?utm_content=DAF5IGwkoCc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="p-8 max-w-7xl mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
