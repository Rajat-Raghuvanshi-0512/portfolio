import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="absolute hidden md:flex flex-col gap-3 bottom-5 left-5 z-10">
      <a
        href="https://github.com/Rajat-Raghuvanshi-0512"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="w-6 h-6 text-gray-800 duration-300 hover:drop-shadow-md dark:text-white hover:text-black dark:hover:text-slate-300 hover:scale-95" />
      </a>
      <a
        href="https://www.instagram.com/_rajat_0512"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram className="w-6 h-6 text-gray-800 duration-300 hover:drop-shadow-md dark:text-white hover:text-pink-700 dark:hover:text-slate-300 hover:scale-95" />
      </a>
      <a
        href="https://www.linkedin.com/in/rajat-raghuvanshi-315593201"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="w-6 h-6 text-gray-800 duration-300 hover:drop-shadow-md dark:text-white hover:text-blue-700 dark:hover:text-slate-300 hover:scale-95" />
      </a>
    </div>
  );
};

export default SocialMedia;
