import React, { useState } from "react";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CiLock, CiUnlock } from "react-icons/ci";
import { BsDot } from "react-icons/bs";

const LeftControls = ({
  formatTime,
  currentTime,
  mute,
  setMute,
  handleReplay,
  isFinished,
  isPlaying,
  setDisabled,
  disabled,
  volume,
  handleVolumeChange,
  totalTime,
}) => {
  const [lock, setLock] = useState(false);
  function Lock() {
    setLock(!lock);
    setDisabled(!disabled);
  }
  return (
    <div className="flex p-[1rem] bottom-0 gap-[1rem] items-center max-[700px]:gap-[7px] max-[700px]:p-2">
      {lock ? (
        <CiUnlock
          onClick={Lock}
          className="text-white cursor-pointer mr-[1rem] text-[25px] max-[800px]:text-[18px] max-[700px]:mr-1"
        />
      ) : (
        <CiLock
          onClick={Lock}
          className="text-white cursor-pointer mr-[1rem] text-[25px] max-[800px]:text-[18px] max-[700px]:mr-1"
        />
      )}
      {!isPlaying && isFinished ? (
        <IoMdRefresh
          className="text-white cursor-pointer text-[25px] max-[800px]:text-[18px]"
          onClick={handleReplay}
        />
      ) : (
        ""
      )}

      <div className="flex gap-1">
        {mute ? (
          <BiVolumeMute
            className="text-white cursor-pointer text-[25px] max-[800px]:text-[18px]"
            onClick={() => setMute(!mute)}
          />
        ) : (
          <BiVolumeFull
            className="text-white cursor-pointer text-[25px] max-[800px]:text-[18px]"
            onClick={() => setMute(!mute)}
          />
        )}
      </div>
      <div className="flex flex-col relative">
        <input
          type="range"
          min="0"
          max={mute ? "0" : "1"}
          step="0.01"
          value={volume}
          className="max-[800px]:hidden"
          onChange={handleVolumeChange}
        />
      </div>
      <span className="font-sofia text-white max-[800px]:text-xs">
        {formatTime(currentTime)}/{formatTime(totalTime)}
      </span>
    </div>
  );
};

export default LeftControls;
