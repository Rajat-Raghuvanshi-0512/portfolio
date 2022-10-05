import React from "react";
import { Copyright, NavigationDots, SocialMedia } from "../components";

const AppWrapper = (Component, IdName) => () => {
  return (
    <div id={IdName} className="relative">
      <SocialMedia />
      <Component />
      <NavigationDots IdName={IdName} />
      <Copyright />
    </div>
  );
};

export default AppWrapper;
