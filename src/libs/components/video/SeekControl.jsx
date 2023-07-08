import React, { useState } from "react";
import { BsDot } from "react-icons/bs";

const SeekControl = ({ handleSeek, currentTime, vidRef, maxTime }) => {
  const [move, setMove] = useState(0);

  function drag() {
    setMove(+1);
  }

  return (
    <>
      {/* <div className="bg-[rgb(255,255,255,0.4)] h-[1px] w-full" /> */}
      {/* <div className={`bg-[rgb(255,255,255)] h-[3px] w-[2px] absolute`} /> */}
      {/* <BsDot
        size={70}
        className={`text-white cursor-pointer absolute -top-[19px] ${
          move ? "left-1" : "-left-4"
        }`}
        // onDrag={}
      /> */}
      <input
        type="range"
        min="0"
        max={maxTime}
        step="0.01"
        value={currentTime}
        onInput={handleSeek}
      />
    </>
  );
};

export default SeekControl;
