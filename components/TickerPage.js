import React from "react";
import Ticker from "react-ticker";

const TickerPage = () => {
  return (
    <div className="w-full py-10">
      <Ticker speed={15} mode="smooth">
        {({ index }) => (
          <>
            <h1 className="text-[#003934] lg:text-6xl md:text-3xl text-xl font-bold">
              Mumtaz Family Restaurant
            </h1>
            <p className="text-center ">Bon appétit! </p>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default TickerPage;
