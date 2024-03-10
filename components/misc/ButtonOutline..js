import React from "react";

const ButtonOutline = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        "font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary text-white-300 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary hover:text-white-500 transition-all hover:shadow-primary " +
        className
      }
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
