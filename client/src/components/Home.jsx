import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Circle, ReactLogo, ReduxLogo, NodeLogo } from "../constants";
import AppWrapper from "../wrapper/AppWrapper";

const toRotate = [
  "Web Developer",
  "UI/UX Designer",
  "Blockchain Developer",
  "App Developer",
];

const Home = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const tick = useCallback(() => {
    let i = count % toRotate.length;
    let fulllength = toRotate[i];
    let updatedText = isDeleting
      ? fulllength.substring(0, text.length - 1)
      : fulllength.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && text === fulllength) {
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCount((prev) => prev + 1);
    }
  }, [text, count, isDeleting]);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      tick();
    }, 100);
    return () => clearInterval(tickInterval);
  }, [text, tick]);

  return (
    <div className="pt-24 md:pt-20 px-5 sm:px-16 md:px-20 lg lg:px-24 md:h-screen grid gap-10 grid-cols-1 md:grid-cols-6 justify-between items-center -z-50 bg-cover bg-center dark:bg-[rgba(0,0,0,0.85)] bg-bgLight dark:bg-bgDark dark:bg-blend-overlay dark:saturate-50 dark:backdrop-saturate-150 dark:backdrop-brightness-75">
      <motion.div
        whileInView={{ x: [-150, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className=" md:col-span-2 drop-shadow-lg dark:shadow-[rgba(255,255,255,0.15)] flex-1 flex flex-col gap-y-5 sm:gap-y-10"
      >
        <div className="bg-white dark:bg-opacity-80 rounded-2xl py-3 px-3 sm:px-5 lg:px-8 sm:py-2 w-fit flex">
          <div className="flex justify-center items-center text-2xl lg:text-4xl pr-3">
            👋
          </div>
          <div>
            <div className="text-[0.75rem] sm:text-sm md:text-md sm:pt-2">
              Hi!, My name is
            </div>
            <div className="text-2xl lg:text-4xl font-bold sm:py-2">Rajat</div>
          </div>
        </div>
        <div className="bg-white dark:bg-opacity-80 rounded-2xl px-3 sm:px-5 lg:px-8 py-2 sm:py-4 flex">
          <div className="flex justify-center items-center text-2xl lg:text-3xl pr-3">
            🚀
          </div>
          <div>
            <div className="text-sm pt-2 sm:pt-0 sm:py-2">I am</div>
            <div className="text-xl font-semibold py-2 break-words">
              {text}❗
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex md:col-span-3 w-full h-full ">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.2 }}
          className="flex items-end w-full h-full md:px-14 justify-center relative"
        >
          <img
            src="/me.png"
            alt="owner"
            className="w-full h-[300px] md:h-[450px] lg:h-[450px] object-top object-contain drop-shadow-2xl pt-10 z-10"
          />
          <div className="absolute w-full h-full  flex justify-center items-center">
            <img
              src={Circle}
              alt="circle"
              className="w-full h-full md:w-[370px] md:h-[370px] lg:w-[430px] lg:h-[430px] object-top object-contain absolute md:bottom-5"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="flex md:flex-col justify-center pb-14 lg:pb-0"
      >
        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full shadow-lg drop-shadow-lg dark:shadow-[rgba(255,255,255,0.15)] p-3 lg:p-4 bg-white ">
          <img
            src={ReactLogo}
            alt="react"
            className="w-full h-full  hover:animate-spin cursor-pointer"
          />
        </div>
        <div className="w-20 h-20 lg:w-28 lg:h-28 mx-10 md:mx-0 md:ml-10 my-5 rounded-full shadow-lg drop-shadow-lg dark:shadow-[rgba(255,255,255,0.15)] p-3 lg:p-4 bg-white">
          <img
            src={ReduxLogo}
            alt="react"
            className="w-full h-full hover:animate-spin cursor-pointer"
          />
        </div>
        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full shadow-lg drop-shadow-lg dark:shadow-[rgba(255,255,255,0.15)] p-3 lg:p-4 bg-white ">
          <img
            src={NodeLogo}
            alt="react"
            className="w-full h-full hover:animate-spin cursor-pointer "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrapper(Home, "home");
