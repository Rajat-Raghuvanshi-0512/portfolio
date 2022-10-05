import React from "react";
import AppWrapper from "../wrapper/AppWrapper";

const Work = () => {
  return (
    <div className="pt-32 md:pt-20 px-5 lg:px-28 md:h-screen grid gap-10 grid-cols-1 md:grid-cols-6 justify-between items-center -z-50 bg-cover bg-center dark:bg-[rgba(0,0,0,0.85)] bg-bgLight dark:bg-bgDark dark:saturate-50 dark:backdrop-saturate-150 dark:backdrop-brightness-75"></div>
  );
};

export default AppWrapper(Work, "work");
