import React, { useEffect, useState } from 'react'
import { IoMdMoon } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';

const DarkModeToggleBtn = ({className}) => {
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
    <div
        className={`rounded-full w-8 h-8 p-1 cursor-pointer flex justify-center items-center hover:drop-shadow-lg hover:scale-95 duration-500 ${
          !isChecked ? "bg-white text-black" : "bg-white text-black"
        } ${className}`}
        onClick={toogleDarkMode}
        title="Toggle Dark/Light Mode"
      >
        {isChecked ? (
          <IoSunny className="w-6 h-6 p-[2px]" />
        ) : (
          <IoMdMoon className="w-6 h-6" />
        )}
      </div>
  )
}

export default DarkModeToggleBtn