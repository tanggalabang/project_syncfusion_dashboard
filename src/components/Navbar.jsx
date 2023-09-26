import React from "react";
import { FiSettings } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        className={`relative text-xl rounded-full p-3 mt-2 text-[#fff] hover:bg-light-gray hover:text-[#031949] ${
          activeMenu ? "hidden" : ""
        }`}
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );

  return (
    <div className="bg-[#031949]">
      <div className="flex justify-between md:ml-6 md:mr-6 relative">
        <NavButton
          title="Menu"
          customFunc={handleActiveMenu}
          icon={<AiOutlineMenu />}
        />
        <div className=""></div>
        <div className="">
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            className="text-xl text-[#fff] rounded-full p-3 mt-2 mb-2 float-right block"
          >
            <FiSettings />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
