import React, { useState } from "react";
import { logo, menu, cross } from "../assests";
import LinkComponent, { LinkComponentM } from "./LinkComponent";

const Navbar = () => {
  const [isClicked, setClick] = useState(false);
  function handleClick() {
    setClick(!isClicked);
  }
  return (
    <nav className="bg-gray-300 mb-10 text-[20px] font-medium sticky top-0">
      <div className="mx-auto flex max-w-7xl items-center text-red-600 justify-between py-3 px-2 md:px-8 ">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 mr-1" />
          <span>App</span>
        </div>
        <div className="hidden px-8 md:px-4 space-x-6 md:flex ">
          <LinkComponent path="/" value="Search" />
          <LinkComponent path="/Patna" value="Patna" />
          <LinkComponent path="/London" value="London" />
          <LinkComponent path="/Paris" value="Paris" />
        </div>
        <div className="md:hidden" id="menu" onClick={handleClick}>
          {isClicked ? (
            <img src={cross} alt="menu" className="w-10 h-10 " />
          ) : (
            <img src={menu} alt="menu" className="w-8 h-8 " />
          )}
        </div>
      </div>
      <div className="md:hidden">
        {isClicked ? (
          <div>
            <LinkComponentM path="/" value="Search" />
            <LinkComponentM path="/Patna" value="Patna" />
            <LinkComponentM path="/London" value="London" />
            <LinkComponentM path="/Paris" value="Paris" />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
