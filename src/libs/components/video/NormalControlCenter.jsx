import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const NormalControlCenter = ({ pause, play, isPlaying }) => {
  return (
    <div className="absolute flex gap-2 w-full justify-center items-center my-auto inset-0 overflow-hidden">
      {isPlaying ? (
        <FaPause
          className="cursor-pointer text-white"
          size={30}
          onClick={pause}
        />
      ) : (
        <FaPlay
          size={30}
          className="cursor-pointer text-white"
          onClick={play}
        />
      )}
    </div>
  );
};

export default NormalControlCenter;
