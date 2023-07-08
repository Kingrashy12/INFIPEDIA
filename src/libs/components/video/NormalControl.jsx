import React from "react";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import SeekControl from "./SeekControl";

const NormalControl = ({
  setMute,
  mute,
  vidRef,
  handleSeek,
  maxTime,
  currentTime,
}) => {
  return (
    <div className="absolute bottom-0 p-[1rem] gap-[1rem] flex flex-col h-[80px] bg-[rgb(0,0,0,0.5)] w-full overflow-hidden max-[700px]:p-[10px]">
      <SeekControl
        currentTime={currentTime}
        handleSeek={handleSeek}
        vidRef={vidRef}
        maxTime={maxTime}
      />
      <div className="flex gap-1">
        {mute ? (
          <BiVolumeMute
            size={25}
            className="text-white cursor-pointer"
            onClick={() => setMute(!mute)}
          />
        ) : (
          <BiVolumeFull
            size={25}
            className="text-white cursor-pointer"
            onClick={() => setMute(!mute)}
          />
        )}
      </div>
      {/* <span className="font-sofia text-white">{formatTime(currentTime)}</span> */}
    </div>
  );
};

export default NormalControl;
