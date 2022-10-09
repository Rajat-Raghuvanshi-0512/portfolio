import React from "react";
import AppWrapper from "../wrapper/AppWrapper";

const Skills = () => {
  return (
    <div className="pt-32 md:pt-20 px-5 lg:px-28 md:h-screen grid gap-10 grid-cols-1 md:grid-cols-6 justify-between items-center -z-50 bg-cover bg-center bg-white dark:bg-gradient-to-bl from-black to-slate-800 dark:saturate-50 dark:backdrop-saturate-150 dark:backdrop-brightness-75"></div>
  );
};

export default AppWrapper(Skills, "skills");
