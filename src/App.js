import React, { useEffect } from "react";
// styling
import "./App.css";
// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// react icons
import { FiSettings } from "react-icons/fi";
// tooltip component
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// charts and pages
import {
  Pie,
  Area,
  Bar,
  ColorMapping,
  ColorPicker,
  Line,
  Financial,
  Stacked,
  Pyramid,
  Kanban,
  Orders,
  Employees,
  Editor,
  Customers,
  Calendar,
  Ecommerce,
} from "./pages";
// components and components charts
import { Footer, Navbar, Sidebar, ThemeSettings } from "./components";
// context
import { useStateContext } from "./context/ContextProvider";

function App() {
  const {
    ActiveMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="rounded-full text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor }}
                onClick={() => {
                  setThemeSettings(true);
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {ActiveMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondry-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={
              ActiveMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/Ecommerce" element={<Ecommerce />} />
                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/Employees" element={<Employees />} />
                <Route path="/Customers" element={<Customers />} />
                {/* apps  */}
                <Route path="/Kanban" element={<Kanban />} />
                <Route path="/Editor" element={<Editor />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts */}
                <Route path="/Line" element={<Line />} />
                <Route path="/Area" element={<Area />} />
                <Route path="/Bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/Financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/Stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
