import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({
  component,
  color,
  bgHoverColor,
  bgcolor,
  icon,
  borderRadius,
  size,
  text,
}) => {
  const { InitialState, setIsClicked } = useStateContext();

  return (
    <button
      className={`p-3 text-${size} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      type="button"
      style={{
        color: color,
        background: bgcolor,
        borderRadius: borderRadius === undefined ? "10px" : borderRadius,
      }}
      onClick={() => setIsClicked(InitialState)}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
