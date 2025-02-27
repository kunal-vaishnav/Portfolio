import React from "react";
import skills from "./assets/skills.jpg";

const Skills = () => {
  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      {/* Left Side - Skills */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Skills</h2>
        <p className="text-gray-400 text-lg text-center leading-relaxed">
          C++, Java, Python, React, Node.js, HTML, CSS, JavaScript
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={skills}
          alt="Skills"
          className="w-96 h-96 object-cover rounded-2xl border-4 border-yellow-400 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Skills;
