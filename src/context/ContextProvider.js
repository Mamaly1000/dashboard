import React, { useContext, createContext, useState } from "react";
const StateContext = createContext();

const InitialState = {
  chat: false,
  cart: false,
  userprofile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [ActiveMenu, setActiveMenu] = useState(true);
  const [IsClicked, setIsClicked] = useState(InitialState);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [screensize, setscreensize] = useState(undefined);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (e) => {
    setCurrentColor(e);
    localStorage.setItem("colorMode", e);
    setThemeSettings(false);
  };

  const HandleClick = (component) => {
    setIsClicked({ ...InitialState, [component]: true });
  };

  return (
    <StateContext.Provider
      value={{
        setIsClicked,
        ActiveMenu,
        setActiveMenu,
        IsClicked,
        HandleClick,
        screensize,
        setscreensize,
        setColor,
        setMode,
        currentColor,
        setThemeSettings,
        themeSettings,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        InitialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
