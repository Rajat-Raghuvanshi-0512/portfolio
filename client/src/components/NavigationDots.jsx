import React from "react";
import navigationPanel from "../utils/NavigationPanel";
const NavigationDots = ({ IdName }) => {
  return (
    <div className="absolute right-5 top-[50%] md:flex flex-col gap-2 hidden">
      {navigationPanel.map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={item.name}
          href={`#${item.name}`}
          className={`w-2 h-2 border-2 border-red-400 rounded-full ${
            item.name.toLowerCase() === IdName.toLowerCase() && "bg-red-700"
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
