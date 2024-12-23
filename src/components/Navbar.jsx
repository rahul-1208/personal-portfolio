import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/RB.png";
import leetcode from "../assets/leetcode.png";
import { DiCssdeck } from "react-icons/di";
import { FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-4 space-y-4 md:space-y-0">
      <div className="flex items-center">
        <div className="rounded-2xl  p-4">
          <DiCssdeck className="text-4xl" />
        </div>
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-lg md:text-2xl">
        <a
          href="https://www.linkedin.com/in/balla-rahul/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/rahulballa1604/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6"
        >
          <img src={leetcode} alt="logo" />
        </a>
        <a
          href="https://github.com/rahul-1208/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6"
        >
          <FaGithub />
        </a>

        <a
          href="https://drive.google.com/file/d/1BWSHzXqJZcMVp5haAN84-6fo068ry8j8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
