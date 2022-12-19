import React, { useEffect } from "react";
import AppWrapper from "../wrapper/AppWrapper";
import { client, urlFor } from "../client";
import { useState } from "react";
import Loader from "./Loader";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState([]);
  const [icondataref, icondataInView] = useInView();
  const [dataref, dataInView] = useInView();
  const [headingref, headingInView] = useInView();

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
      <h2
        ref={headingref}
        className={`${
          headingInView && "fade-scale-in"
        } text-2xl md:text-4xl font-bold uppercase border-b-2 border-slate-300 w-fit mx-auto pb-3 tracking-widest mt-10 drop-shadow-lg text-center`}
      >
        <span className="text-red-600"> Skills</span>
        <span className="dark:text-white"> & </span>
        <span className="text-indigo-800">Experience</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-16 py-10 dark:text-slate-200">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div
              ref={icondataref}
              className="grid grid-cols-2 lg:grid-cols-3 flex-1 gap-y-16 gap-x-4 h-fit flex-wrap"
            >
              {skills.map((item) => (
                <div
                  className={`flex items-center gap-3 ${
                    icondataInView && "fade-scale-in"
                  } animation-delay`}
                  key={item.name}
                >
                  <img
                    src={urlFor(item.icon)}
                    className="w-14 h-14 p-3 bg-slate-100 rounded-full object-contain"
                    alt=""
                  />
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
            <div
              ref={dataref}
              className={`flex-1 ${dataInView && "slide-from-right"}`}
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppWrapper(Skills, "skills");
