import React from "react";

const ButtonSecondaryShadow = ({ children, addClass }) => {
  return (
    <button
      className={
        "font-medium tracking-wide py-[10px] px-4 sm:px-8  text-white-300  outline-none rounded-l-full rounded-r-full capitalize  hover:text-white-500 transition-all hover:shadow-seconday " +
        addClass
      }
      style={{
        background: "#6A53FF",
        boxShadow: "0px 4px 20px 0px #5E45FF",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonSecondaryShadow;
