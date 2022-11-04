import React from "react";
// react router dom
import { Link, NavLink } from "react-router-dom";
// react icons
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
// tooltip component
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// importing data
import { links } from "./../data/dummy";
// context
import { useStateContext } from "./../context/ContextProvider";

const Sidebar = () => {
  const { ActiveMenu, setActiveMenu, screensize, currentColor } =
    useStateContext();

  const HandlecloseSidebar = () => {
    if (ActiveMenu && screensize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="pl-3 h-screen dark:bg-main-dark-bg md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {ActiveMenu && (
        <>
          <div
            className="flex justify-between items-center"
            style={{ transition: "all .3s linear" }}
          >
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              to="/"
              onClick={HandlecloseSidebar}
            >
              <SiShopware />
              <span>shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu((prev) => !prev);
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel style={{ color: currentColor }} />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    onClick={HandlecloseSidebar}
                    to={`${link.name}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
