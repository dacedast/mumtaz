import React from "react";

const Loader = () => {
  return (
    <div className="fixed flex flex-col justify-center items-center w-screen h-screen top-0 bg-[#003934] z-[99] overflow-hidden">
      <img src="/favicon.ico" className="w-[300px]" />
      <img src="/loader.svg" />
    </div>
  );
};

export default Loader;
