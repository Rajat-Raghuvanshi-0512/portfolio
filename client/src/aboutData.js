import { AppDev, FrontDev, BackDev, BlockDev } from "./constants";

const data = [
  {
    title: "Frontend Development",
    description:
      "Started learning frontend development in 2020. Created many websites and did several interships as a frontend developer.",
    imgUrl: FrontDev,
    id: 1,
  },
  {
    title: "Backend Development",
    description:
      "I like to create my own APIs whenever possible. I love to use express with Nodejs to create APIs along with MongoDB to save data.",
    imgUrl: BackDev,
    id: 2,
  },
  {
    title: "App Development",
    description:
      "Started learning app development in 2022. Created a couple of apps using React Native.",
    imgUrl: AppDev,
    id: 3,
  },
  {
    title: "Blockchain Development",
    description:
      "I have recently started to gain some interest towards the blockchain world. I have been learning solidity lately",
    imgUrl: BlockDev,
    id: 4,
  },
];

export default data;
