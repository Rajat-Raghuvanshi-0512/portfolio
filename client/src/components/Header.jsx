import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useModal } from "../custom-hooks";
import Drawer from "./Drawer";
import navigationPanel from "../utils/NavigationPanel";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [isChecked, setIsChecked] = useState(false);
  const [ref, InView] = useInView();

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
    <div
      className={`flex justify-between px-4 sm:px-10 md:px-16 lg:px-40 py-5 backdrop-blur-sm fixed w-full z-50 bg-gradient-to-r from-[#C0C8D5aa] to-[#fff] drop-shadow-lg bg-opacity-40 dark:from-black dark:to-slate-800 dark:text-white border-b border-gray-200 dark:border-slate-800 ${
        InView && "slide-from-top"
      }`}
      ref={ref}
    >
      <h2 className=" flex gap-10">
        <span className="bg-gradient-to-br from-slate-600 to-black dark:from-white dark:to-gray-500 bg-clip-text text-transparent text-2xl lg:text-3xl font-roboto hover:scale-105 duration-500 cursor-default">
          Rajat Raghuvanshi
        </span>
        <div
          className={`rounded-full w-8 h-8 p-1 cursor-pointer flex justify-center items-center hover:drop-shadow-lg hover:scale-90 duration-500 ${
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
              className={`capitalize text-gray-700 dark:text-slate-100 hover:text-red-700 hover:duration-500 font-medium`}
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
          <ul className="flex flex-col mt-14 ">
            {navigationPanel.map((item) => (
              <li className="" key={item.name}>
                <a
                  href={`#${item.name}`}
                  className="capitalize text-gray-700 text-md flex items-center gap-5 px-4 hover:bg-white py-4 mx-4 my-2 rounded-lg duration-300 dark:text-slate-200 dark:hover:bg-slate-700"
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
    </div>
  );
};

export default Header;
