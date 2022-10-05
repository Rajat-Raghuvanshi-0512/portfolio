import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useModal } from "../custom-hooks";
import { motion } from "framer-motion";
import Drawer from "./Drawer";
import { useEffect } from "react";
import navigationPanel from "../utils/NavigationPanel";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [isChecked, setIsChecked] = useState(false);

  const toogleDarkMode = (e) => {
    if (document.body.classList.contains("dark")) {
      setIsChecked(false);
      document.body.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      setIsChecked(true);
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.body.classList.add("dark");
      setIsChecked(true);
    }
  }, []);

  return (
    <motion.div
      whileInView={{ y: [-70, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="flex justify-between px-4 sm:px-10 md:px-16 lg:px-40 py-5 backdrop-blur-sm fixed w-full z-50 bg-gradient-to-r from-[#C0C8D5aa] to-[#fff] drop-shadow-lg bg-opacity-40 dark:from-black dark:to-slate-800 dark:text-white"
    >
      <h2 className="text-2xl lg:text-3xl font-bold font-serif flex gap-10">
        <span>Rajat Raghuvanshi</span>
        <div
          className={`rounded-full w-8 h-8 p-1 cursor-pointer flex justify-center items-center ${
            !isChecked ? "border-black border-2" : "bg-white text-black"
          }`}
          onClick={toogleDarkMode}
        >
          {!isChecked ? (
            <IoMoonOutline className="w-6 h-6" />
          ) : (
            <IoMdMoon className="w-6 h-6" />
          )}
        </div>
      </h2>
      <ul className="hidden md:flex gap-x-7 ">
        {navigationPanel.map((item) => (
          <li
            className=" flex items-center justify-center"
            key={`list-${item.name}`}
          >
            <a
              href={`#${item.name}`}
              className="capitalize text-gray-700 dark:text-slate-100 hover:text-blue-600 hover:duration-500"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center md:hidden">
        <GiHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={openModal}
        />
        <Drawer isOpen={isOpen} onClose={closeModal} title="Menu">
          <ul className="flex flex-col mt-14">
            {navigationPanel.map((item) => (
              <li className="" key={item.name}>
                <a
                  href={`#${item.name}`}
                  className="capitalize text-gray-700 text-md flex items-center gap-5 px-4 hover:bg-white py-4 mx-4 my-2 rounded-lg duration-300"
                  onClick={closeModal}
                >
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </motion.div>
  );
};

export default Header;
