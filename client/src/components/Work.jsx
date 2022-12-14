import React, { useState } from "react";
import AppWrapper from "../wrapper/AppWrapper";
import { AiFillEye } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import workData from "../workData";
import { useEffect } from "react";
import Loader from "./Loader";
import { useInView } from "react-intersection-observer";

const choices = ["All", "React", "Web 3.0", "MERN Stack"];

const Work = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(choices[0]);
  const [dataref, dataInView] = useInView();
  const [headingref, headingInView] = useInView();

  const handleClick = (selection) => {
    setSelected(selection);
    setTimeout(() => {
      if (selection === "All") {
        setFilteredData(workData);
      } else {
        const newData = workData.filter((i) => i.tag.includes(selection));
        setFilteredData(newData);
      }
    }, 500);
  };

  useEffect(() => {
    if (workData) {
      setLoading(true);
      setFilteredData(workData);
      setLoading(false);
    }
  }, []);

  return (
    <div className="pt-14 md:pt-16 px-5 sm:px-16 md:px-20 lg:px-28 md:h-screen bg-cover bg-center dark:bg-[rgba(0,0,0,0.85)] bg-bgLight dark:bg-bgDark dark:bg-blend-overlay dark:saturate-50 dark:backdrop-saturate-150 dark:backdrop-brightness-75">
      <h2
        ref={headingref}
        className={`text-2xl md:text-4xl font-bold uppercase border-b-2 border-slate-300 w-fit mx-auto pb-3 tracking-widest mt-10 drop-shadow-lg text-center ${
          headingInView && "fade-scale-in"
        }`}
      >
        <span className="dark:text-white"> Some of my</span>
        <span className="text-red-600"> WORK </span>
        <span className="text-blue-700">Samples</span>
      </h2>
      <div className="dark:text-slate-800 mt-6 flex flex-col">
        <ul className="flex flex-wrap gap-10 justify-center items-center">
          {choices.map((item) => (
            <li
              key={item}
              className={`bg-white dark:bg-opacity-80 py-2 px-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-red-400 hover:text-white duration-200 font-medium shadow-lg hover:shadow-xl text-sm ${
                item === selected && "bg-red-600 text-white"
              } `}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div
          className="flex flex-wrap lg:flex-nowrap mt-8 gap-10 pb-14 lg:pb-0 justify-center overflow-hidden"
          ref={dataref}
        >
          {loading ? (
            <Loader />
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className={`w-60 bg-white dark:bg-opacity-80 rounded-xl p-4 mb-5 shadow-md hover:shadow-xl min-w-[230px] ${
                  dataInView && "slide-from-right"
                } `}
              >
                <div className="relative rounded-md overflow-clip ">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={`${item.videoUrl}`}
                    type="video/mp4"
                    className="w-full h-[160px] object-contain bg-gray-200 "
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute hover:bg-[rgba(0,0,0,0.4)] w-full h-full top-0 left-0 flex items-center justify-center gap-5 duration-300 opacity-0 hover:opacity-100">
                    <a
                      className="hover:opacity-100 hover:scale-75 duration-300"
                      href={item.projectLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      title="View project"
                    >
                      <AiFillEye className="w-10 h-10 rounded-full text-white bg-[rgba(0,0,0,0.4)] p-2" />
                    </a>
                    <a
                      className="hover:opacity-100 hover:scale-75 duration-300"
                      href={item.codeLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      title="View code"
                    >
                      <HiCode className="w-10 h-10 rounded-full text-white bg-[rgba(0,0,0,0.4)] p-2" />
                    </a>
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <div className="absolute mx-auto text-sm -mt-3 px-2 bg-red-500 w-fit rounded font-light text-white">
                    {item.tag}
                  </div>
                </div>
                <h5 className="font-semibold mt-4 mb-2">{item.title}</h5>
                <p className="text-sm lg:text-[10px] leading-4 text-justify">
                  {item.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AppWrapper(Work, "work");
