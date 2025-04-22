import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const Home = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center max-w-lg mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi! I'm Braden Adams
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          A passionate web developer crafting innovative experiences!
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
