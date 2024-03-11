import React from "react";

const ButtonPrimary = ({ children, addClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "font-medium text-[14px] tracking-wide py-[8px] px-4 sm:px-8 border border-seconday text-white-300  outline-none rounded-l-full rounded-r-full capitalize  hover:text-white-500 transition-all hover:shadow-seconday " +
        addClass
      }
      style={{
        background:
          "radial-gradient(167.31% 100% at 50.43% 23.61%, #6037FF 0%, #B27AFF 100%)",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
