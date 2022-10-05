import { HiHome } from "react-icons/hi";
import { FcAbout, FcContacts, FcComboChart } from "react-icons/fc";
import { MdWork } from "react-icons/md";

const navigationPanel = [
  {
    name: "home",
    icon: (
      <HiHome className="text-teal-600 bg-teal-300 text-3xl rounded p-[0.35rem] bg-opacity-40" />
    ),
  },
  {
    name: "about",
    icon: (
      <FcAbout className="text-blue-600 bg-blue-300 text-3xl rounded p-[0.35rem] bg-opacity-40" />
    ),
  },
  {
    name: "work",
    icon: (
      <MdWork className="text-gray-800 bg-gray-300 text-3xl rounded p-[0.35rem] bg-opacity-40" />
    ),
  },
  {
    name: "skills",
    icon: (
      <FcComboChart className="text-green-600 bg-green-300 text-3xl rounded p-[0.35rem] bg-opacity-40" />
    ),
  },
  {
    name: "contact",
    icon: (
      <FcContacts className="text-orange-500 bg-orange-300 text-3xl rounded p-[0.35rem] bg-opacity-40 " />
    ),
  },
];

export default navigationPanel;
