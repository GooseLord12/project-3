import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/canyon.jpg";
const About = () => {
  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto text-gray-800 bg-white rounded-lg shadow-lg mt-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-800">
        About Me
      </h2>

      <div className="flex justify-center mb-8">
        <img
          src={profileImg}
          alt="Braden Adams"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
      </div>

      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        I'm a Web and Graphic Design Student at the University of Central
        Florida specializing in designing user-centered programs that bridge the
        gap between technology and human interactions. A dynamic professional
        with a clear eye for aesthetics and a strong focus on usability,
        creating seamless and collaborative visual languages that enhance user
        experiences entertainment, hospitality, and beyond. I'm passionate about
        utilizing cutting-edge technology and design principles to build
        efficient interfaces that foster meaningful connections in everyday
        life!
      </p>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-blue-700">Skills</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>PHP</li>
          <li>Git & GitHub</li>
          <li>Adobe Creative Suite</li>
          <li>Figma</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-blue-700">Hobbies</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          Outside of programming, I enjoy drawing, working out, and playing
          video games. You can probably find me at my local movie theater, too!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
