import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import logo from "../data/logo.png";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      className="relative text-xl text-[#fff] rounded-full mr-1 p-3 mt-2 mb-2 hover:bg-light-gray hover:text-[#031949]"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Sidebar = () => {
    const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="bg-[#031949] flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-6 mt-4 mb-4 flex text-xl font-extrabold tracking-tight text-white "
            >
            <img
              className="h-7"
              src={logo}
              alt="user-profile"
            />
              <span className="text-[20px]">e-SchoolConnect</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              {/* <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button> */}
              <NavButton
                title="Menu"
                customFunc={handleActiveMenu}
                icon={<AiOutlineMenu />}
              />
            </TooltipComponent>
          </div>
          <div className="flex gap-5 items-center justify-center mt-6">
            <img
              className="rounded-full h-24 w-24"
              src={avatar}
              alt="user-profile"
            />
          </div>
          <div className="gap-5 mt-3 pb-2">
            <p className="text-center mb-2 font-semibold text-xl dark:text-gray-200">
              {" "}
              Michael Roberts{" "}
            </p>
            <p className="text-center mb-2 text-gray-500 text-sm dark:text-gray-400">
              {" "}
              Administrator{" "}
            </p>
            {/* <p className="text-center text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p> */}
          </div>
          <div className="ml-3 mr-3">
            <div className="">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? "#031949" : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
