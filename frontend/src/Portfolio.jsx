//import profileImage from "./assets/profileImage.jpg"; // Add your profile imageimport React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "./assets/profileImage.jpg";
import "@fontsource/poppins";

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 font-[Poppins] w-screen overflow-hidden">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-full flex justify-between items-center py-6 border-b border-gray-700 px-16"
      >
        <motion.h1 className="text-5xl font-extrabold text-cyan-400 cursor-pointer tracking-wide uppercase">
          Kunal Vaishnav
        </motion.h1>
        <nav className="space-x-6 text-lg">
          <Link to="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-full flex-grow px-16 min-h-screen"
      >
        <motion.div
          className="text-left md:w-1/2"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-extrabold uppercase text-cyan-400">
            Full-Stack Developer
          </h2>
          <p className="text-gray-300 mt-4 text-xl">
            Crafting scalable and efficient web solutions with a seamless user
            experience.
          </p>
        </motion.div>
        <motion.div
          className="relative w-[30rem] h-[30rem] mx-auto md:ml-16 rounded-full overflow-hidden shadow-2xl bg-gray-200 border-4 border-cyan-400"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
