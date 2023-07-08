import React, { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import LeftControls from "./LeftControls";
import RightControls from "./RightControls";
import CenterControl from "./CenterControl";
import NormalControl from "./NormalControl";
import SeekControl from "./SeekControl";
import NormalControlCenter from "./NormalControlCenter";

const VideoControll = ({
  play,
  pause,
  handleReplay,
  setMute,
  mute,
  formatTime,
  currentTime,
  isPlaying,
  isFinished,
  fullPage,
  disabled,
  setDisabled,
  hide,
  setFull,
  full,
  volume,
  handleVolumeChange,
  handleSeek,
  vidRef,
  maxTime,
  forward,
  backward,
  playSpeed,
  handleSpeed,
  handleDownload,
  totalTime,
}) => {
  return (
    <div className={`r/elative custom-controls`}>
      <div>
        {fullPage && fullPage ? (
          ""
        ) : (
          <NormalControlCenter
            pause={pause}
            play={play}
            isPlaying={isPlaying}
          />
        )}
      </div>

      {fullPage ? (
        <div className="absolute bottom-0 p-[1rem] flex flex-col h-[100px] bg-[rgb(0,0,0,0.5)] w-full overflow-hidden max-[700px]:p-1">
          <SeekControl
            currentTime={currentTime}
            handleSeek={handleSeek}
            vidRef={vidRef}
            maxTime={maxTime}
          />
          <div className="flex w-full absolute bottom-0 items-center justify-evenly p-[1rem] max-[700px]:-left-3 max-[700px]:p-[1px] max-[700px]:justify-bet/ween">
            <LeftControls
              formatTime={formatTime}
              isFinished={isFinished}
              isPlaying={isPlaying}
              setMute={setMute}
              mute={mute}
              handleReplay={handleReplay}
              currentTime={currentTime}
              setDisabled={setDisabled}
              disabled={disabled}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
              totalTime={totalTime}
            />
            <CenterControl
              play={play}
              pause={pause}
              isPlaying={isPlaying}
              disabled={disabled}
              forward={forward}
              backward={backward}
            />
            <RightControls
              setFullSreen={setFull}
              fullSreen={full}
              playbackSpeed={playSpeed}
              handleSpeedChange={handleSpeed}
              download={handleDownload}
            />
          </div>
        </div>
      ) : (
        <div className="absolute flex p-[1rem] bottom-0 gap-[1rem] w-full /inset-0 max-[700px]:p-[10px]">
          {!isPlaying && isFinished ? (
            <IoMdRefresh
              size={25}
              className="text-white cursor-pointer"
              onClick={handleReplay}
            />
          ) : (
            ""
          )}

          <NormalControl
            formatTime={formatTime}
            currentTime={currentTime}
            mute={mute}
            setMute={setMute}
            vidRef={vidRef}
            maxTime={maxTime}
            handleSeek={handleSeek}
          />
        </div>
      )}
    </div>
  );
};

export default VideoControll;
