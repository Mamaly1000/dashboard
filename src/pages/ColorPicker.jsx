import React from "react";
// color picker pakages
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
// component
import { Header } from "../components";
// context
import { useStateContext } from "../context/ContextProvider";

const change = (arg) => {
  document.getElementById("preview").style.backgroundColor =
    arg.currentValue.hex;
};

const ColorPicker = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color Picker" category="App" />
      <div className="text-center">
        <div
          style={{
            backgroundColor: currentMode === "Dark" ? "#33373e" : "#fff",
            borderRadius:"10px",

          }}
          id="preview"
        />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Pallete"
              modeSwitcher={true}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
