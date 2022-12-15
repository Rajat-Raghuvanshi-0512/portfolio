import React, { useEffect } from "react";
import AppWrapper from "../wrapper/AppWrapper";
import { motion } from "framer-motion";
import { client, urlFor } from "../client";
import { useState } from "react";
import { useMediaQuery } from "../custom-hooks";
import Loader from "./Loader";

const Skills = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState([]);

  const fetchData = async (q) => {
    setLoading(true);
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    const expData = await client.fetch(expQuery);
    const skillsData = await client.fetch(skillsQuery);

    setSkills(skillsData);
    setExperience(expData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-20 md:pt-20 px-5 lg:px-28 md:h-screen -z-50 bg-cover bg-center bg-white dark:bg-gradient-to-bl from-black to-slate-800 dark:saturate-50 dark:backdrop-saturate-150 dark:backdrop-brightness-75">
      <motion.h2
        whileInView={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-bold uppercase border-b-2 border-slate-300 w-fit mx-auto pb-3 tracking-widest mt-10 drop-shadow-lg text-center"
      >
        <span className="text-red-600"> Skills</span>
        <span className="dark:text-white"> & </span>
        <span className="text-indigo-800">Experience</span>
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-16 py-10 dark:text-slate-200">
        {loading ? (
          <Loader />
        ) : (
          <>
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-3 flex-1 gap-y-16 gap-x-4 h-fit flex-wrap"
            >
              {skills.map((item) => (
                <div className="flex items-center gap-3" key={item.name}>
                  <img
                    src={urlFor(item.icon)}
                    className="w-14 h-14 p-3 bg-slate-100 rounded-full object-contain"
                    alt=""
                  />
                  <div>{item.name}</div>
                </div>
              ))}
            </motion.div>
            <motion.div
              whileInView={!isMobile && { opacity: [0, 1], x: [100, 0] }}
              className="flex-1"
            >
              {experience
                .sort((a, b) => a.year - b.year)
                .map((exp, i) => (
                  <div className="flex gap-5" key={i}>
                    <div className="font-bold">{exp.year}</div>
                    <div>
                      {exp.works.map((e) => (
                        <div key={e.company}>
                          <div className="font-bold">{e.company}</div>
                          <div className="py-2 ">{e.name}</div>
                          <div className="text-sm font-light mb-5">
                            {e.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppWrapper(Skills, "skills");
