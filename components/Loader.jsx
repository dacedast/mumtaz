import React from "react";

const Loader = () => {
  return (
    <div className="fixed flex flex-col justify-center items-center w-screen h-screen top-0 bg-[#003934] z-[99] overflow-hidden">
      <img src="/favicon.ico" className="w-[300px]" />
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
