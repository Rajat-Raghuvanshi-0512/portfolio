import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="absolute hidden md:flex flex-col gap-3 bottom-5 left-5">
      <AiFillGithub className="w-6 h-6 cursor-pointer text-gray-700 hover:drop-shadow-lg dark:text-white hover:text-black" />
      <AiFillInstagram className="w-6 h-6 cursor-pointer hover:drop-shadow-lg dark:text-white hover:text-pink-700" />
      <AiFillLinkedin className="w-6 h-6 cursor-pointer hover:drop-shadow-lg dark:text-white hover:text-blue-700" />
    </div>
  );
};

export default SocialMedia;
