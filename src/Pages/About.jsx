import React from "react";
import { motion } from "framer-motion";
import gameHub from "../assets/gamehub.jpg"

const About = () => {
  return (
    <div className="w-10/12 mx-auto py-16">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-10"
      >
        About GameHub
      </motion.h1>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-10 flex flex-col md:flex-row gap-10"
      >
        {/* Left Illustration */}
        <div className="w-full md:w-1/2">
          <img
            src={gameHub}
            alt="game about"
            className="rounded-xl w-full"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Ultimate Game Collection Platform 🎮
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-purple-700">GameHub</span>,
            the modern digital library designed for passionate gamers.  
            Discover games, explore developers, and browse beautifully organized
            collections—all in one place.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is simple:  
            <span className="font-semibold text-purple-700">
              make finding, tracking, and exploring games easy and enjoyable.
            </span>
          </p>

          <ul className="space-y-2 text-gray-700 mt-4">
            <li>⚡ Fast & Responsive UI</li>
            <li>🎨 Beautifully crafted design</li>
            <li>🔥 Developer Spotlight Section</li>
            <li>📱 Mobile-friendly layout</li>
            <li>🕹️ Explore games with ease</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
