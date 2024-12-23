// components/Certification.js
import React from "react";
import awsIcon from "../assets/AwsDevAss.png";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 my-20 text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>

      <a
        href="https://www.credly.com/badges/d83de777-d1e1-4def-89e9-c8b2fd7d7d3c"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          src={awsIcon}
          alt="AWS Certification Icon"
          className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-4"
        />

        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-neutral-300 mb-2"
        >
          AWS Certified Developer – Associate
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mt-2 max-w-3xl text-neutral-100 font-light tracking-tight text-center px-4"
        >
          Demonstrates expertise in designing, deploying and maintaining
          applications on the AWS platform
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4"
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            View Certification
          </button>
        </motion.div>
      </a>
    </div>
  );
};

export default Certification;
