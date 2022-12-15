import React, { useEffect, useRef, useState } from "react";
import AppWrapper from "../wrapper/AppWrapper";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import { useCallback } from "react";
import Loader from "./Loader";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const container = useRef();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const query = '*[_type == "abouts"]';
    const newData = await client.fetch(query);
    setData(newData);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      className="pt-14 md:pt-16 px-5 sm:px-16 md:px-20 lg:px-40 md:h-screen bg-cover bg-center bg-white dark:bg-gradient-to-bl from-black to-slate-800 dark:saturate-50"
      ref={container}
    >
      <motion.div whileInView={{ opacity: [0, 1], scale: [0, 1.2, 1] }}>
        <h2 className="text-2xl md:text-4xl font-bold uppercase border-b-2 border-slate-300 w-fit mx-auto pb-3 tracking-widest mt-10 drop-shadow-lg text-center">
          <span className="text-indigo-800">Fields</span>
          <span className="dark:text-white"> that i have </span>
          <span className="text-red-600">mastered</span>
        </h2>
      </motion.div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid px-5 sm:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 pb-14 lg:pb-0">
          {data.map((item) => (
            <div
              className="w-full drop-shadow-md hover:shadow-lg cursor-default dark:text-white hover:scale-105 duration-500 hover:bg-gray-100 dark:hover:bg-black p-5 rounded-2xl"
              key={item.title}
            >
              <div className="w-full h-[200px] md:h-[170px] overflow-hidden">
                <img
                  src={urlFor(item.imgUrl)}
                  alt="logo"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <p className="font-bold text-xl text-center py-5">{item.title}</p>
              <p className="text-sm lg:text-[10px] text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppWrapper(About, "about");
