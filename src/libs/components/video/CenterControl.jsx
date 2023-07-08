import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

const CenterControl = ({
  play,
  pause,
  isPlaying,
  disabled,
  forward,
  backward,
}) => {
  return (
    <div className="flex gap-[2rem] max-[700px]:gap-[1rem]">
      <TbPlayerTrackPrevFilled
        onClick={backward}
        className={`text-white text-[35px] max-[700px]:text-[19px] ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      />
      {isPlaying ? (
        <FaPause
          className={`text-white text-[35px] max-[700px]:text-[19px] ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          onClick={pause}
        />
      ) : (
        <FaPlay
          className={`text-white text-[35px] max-[700px]:text-[19px] ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          onClick={play}
        />
      )}
      <TbPlayerTrackNextFilled
        onClick={forward}
        className={`text-white text-[35px] max-[700px]:text-[19px] ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      />
    </div>
  );
};

export default CenterControl;
