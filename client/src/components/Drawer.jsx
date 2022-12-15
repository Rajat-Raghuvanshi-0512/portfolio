import React, { memo } from "react";

const Drawer = ({
  isOpen,
  onClose,
  children,
  left,
  title = "Drawer Title",
}) => {
  return (
    <div
      className={`${
        isOpen
          ? "translate-x-0"
          : left
          ? "-translate-x-full"
          : "translate-x-full"
      } w-screen h-screen fixed z-50 top-0 left-0 duration-500 bg-opacity-20 transition-transform`}
    >
      <div
        className={`${
          left ? "left-0" : "right-0"
        } top-0 fixed w-2/3 md:max-w-lg`}
      >
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-gray-100 h-screen shadow dark:bg-gray-800">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Drawer);
