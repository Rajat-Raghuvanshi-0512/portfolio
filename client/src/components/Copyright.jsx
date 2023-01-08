import DarkModeToggleBtn from "./DarkModeToggleBtn";

const Copyright = () => {
  return (
    <div className="absolute right-5 bottom-5 text-sm text-right hidden lg:block dark:text-white">
      <DarkModeToggleBtn className="mb-3 ml-auto" />
      <div>©2022 Rajat</div>
      <div>All rights reserved</div>
    </div>
  );
};

export default Copyright;
