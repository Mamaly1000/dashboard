import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className=" dark:text-gray-200 dark:bg-secondry-dark-bg mb-10">
      <p className="font-semibold text-xl text-gray-400 ">{category}</p>
      <p className=" text-3xl font-extrabold tracking-tight textslate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
