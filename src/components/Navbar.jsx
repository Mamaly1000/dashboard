import React, { useEffect } from "react";
// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// tooltip components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// context
import { useStateContext } from "../context/ContextProvider";
// avatar
import avatar from "./../data/avatar3.png";
// user accdecibilities
import { Cart, Chat, Notification, UserProfile } from ".";

const NavButton = ({ title, func, color, dotColor, icon }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={func}
      style={{ color: color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        style={{ background: dotColor }}
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const {
    IsClicked,
    setActiveMenu,
    HandleClick,
    screensize,
    setscreensize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setscreensize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setscreensize]);

  useEffect(() => {
    if (screensize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [setActiveMenu, screensize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        func={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex ">
        <NavButton
          title="Cart"
          func={() => HandleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          func={() => HandleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03c9d7"
        />
        <NavButton
          title="Notifications"
          func={() => HandleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="#03c9d7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => HandleClick("userprofile")}
          >
            <img alt="dfs" src={avatar} className="rounded-full w-8 h-8 " />
            <p>
              <span className="text-gray-400 text-14">hi,</span>{" "}
              <span
                className="font-bold ml-1 text-14"
                style={{ color: currentColor }}
              >
                Micheal
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {IsClicked.cart && <Cart />}
        {IsClicked.chat && <Chat />}
        {IsClicked.notification && <Notification />}
        {IsClicked.userprofile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
