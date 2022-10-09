import React, { useState } from "react";
import AppWrapper from "../wrapper/AppWrapper";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { useEffect } from "react";
import { client, urlFor } from "../client";

const choices = ["All", "React", "Web 3.0", "MERN Stack"];

const Work = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState(choices[0]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const fetchData = async (q) => {
    const newData = await client.fetch(q);
    setData(newData);
    setFilteredData(newData);
  };

  const handleClick = (selection) => {
    setSelected(selection);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (selection === "All") {
        setFilteredData(data);
      } else {
        const newData = data.filter((i) => i.tags.includes(selection));
        setFilteredData(newData);
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';
    fetchData(query);
  }, []);

  return (
    <div className="pt-32 md:pt-16 px-5 sm:px-16 md:px-20 lg:px-40 md:h-screen bg-cover bg-center dark:bg-[rgba(0,0,0,0.85)] bg-bgLight dark:bg-bgDark dark:bg-blend-overlay dark:saturate-50 dark:backdrop-saturate-150 dark:backdrop-brightness-75">
      <motion.h2
        whileInView={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl font-bold uppercase border-b-2 border-slate-300 w-fit mx-auto pb-3 tracking-widest mt-10 drop-shadow-lg text-center"
      >
        <span className="dark:text-white"> Some of my</span>
        <span className="text-red-600"> WORK </span>
        <span className="text-indigo-800">Samples</span>
      </motion.h2>
      <div className="dark:text-slate-800 mt-10">
        <motion.ul
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap gap-10 justify-center items-center"
        >
          {choices.map((item) => (
            <li
              key={item}
              className={`bg-white dark:bg-opacity-80 py-2 px-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-red-400 hover:text-white duration-200 font-medium shadow-lg hover:shadow-xl text-sm ${
                item === selected && "bg-red-600 text-white"
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </motion.ul>
        <motion.div
          animate={animateCard}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-wrap mt-10 gap-10 w-full justify-center"
        >
          {filteredData.map((item) => (
            <div
              key={item._id}
              className="w-60 bg-white dark:bg-opacity-80 rounded-xl p-4 shadow-md hover:shadow-xl"
            >
              <div className="relative rounded-md overflow-clip">
                <img
                  src={urlFor(item.imgUrl)}
                  alt="circle"
                  className="w-full h-[160px] object-contain bg-gray-200"
                />
                <div className="absolute hover:bg-[rgba(0,0,0,0.4)] w-full h-full top-0 left-0 flex items-center justify-center gap-5 duration-300 opacity-0 hover:opacity-100">
                  <motion.a
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="hover:opacity-100"
                    href={item.projectLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <AiFillEye className="w-10 h-10 rounded-full text-white bg-[rgba(0,0,0,0.4)] p-2" />
                  </motion.a>
                  <motion.a
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className=" "
                    href={item.codeLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <HiCode className="w-10 h-10 rounded-full text-white bg-[rgba(0,0,0,0.4)] p-2" />
                  </motion.a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute mx-auto text-sm -mt-3 px-2 bg-red-500 w-fit rounded font-light text-white">
                  {item.tags[0]}
                </div>
              </div>
              <h5 className="font-semibold mt-4 mb-2">{item.title}</h5>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrapper(Work, "work");