import { GiHamburgerMenu } from "react-icons/gi";
import { useModal } from "../custom-hooks";
import Drawer from "./Drawer";
import navigationPanel from "../utils/NavigationPanel";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [ref, InView] = useInView();

  return (
    <div
      className={`flex justify-between px-4 sm:px-10 md:px-16 lg:px-40 py-5 backdrop-blur-sm fixed w-full z-50 bg-gradient-to-r from-[#a2aab7aa] to-[#fff] bg-opacity-70 drop-shadow-lg  dark:from-black dark:to-slate-800 dark:text-white ${
        InView && "slide-from-top"
      }`}
      ref={ref}
    >
      <h2 className=" flex gap-10">
        <span className="bg-black dark:bg-white  bg-clip-text text-transparent text-2xl lg:text-3xl font-roboto hover:scale-105 duration-500 cursor-default">
          Rajat Raghuvanshi
        </span>
      </h2>
      <ul className="hidden md:flex gap-x-7 ">
        {navigationPanel.map((item) => (
          <li
            className=" flex items-center justify-center"
            key={`list-${item.name}`}
          >
            <a
              href={`#${item.name}`}
              className={`capitalize text-gray-700 dark:text-slate-100 hover:text-red-700 hover:duration-500 font-medium`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center md:hidden">
        <GiHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={openModal}
        />
        <Drawer isOpen={isOpen} onClose={closeModal} title="Menu">
          <ul className="flex flex-col mt-14 ">
            {navigationPanel.map((item) => (
              <li className="" key={item.name}>
                <a
                  href={`#${item.name}`}
                  className="capitalize text-gray-700 text-md flex items-center gap-5 px-4 hover:bg-white py-4 mx-4 my-2 rounded-lg duration-300 dark:text-slate-200 dark:hover:bg-slate-700"
                  onClick={closeModal}
                >
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
