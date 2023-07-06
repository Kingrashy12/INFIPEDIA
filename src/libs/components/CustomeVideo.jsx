import React, { useEffect, useRef, useState } from "react";
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import Libography from "../Texts/Libography";
import { GoDotFill } from "react-icons/go";

const CustomeVideo = ({ className, video }) => {
  const vidRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(vidRef.current.currentTime);
    };

    vidRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      vidRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  function play() {
    vidRef.current.play();
  }
  function pause() {
    vidRef.current.pause();
  }
  const handleReplay = () => {
    vidRef.current.currentTime = 0; // Reset video time to the beginning
    vidRef.current.play(); // Start playing the video
  };

  function handleEnd() {
    setIsPlaying(false);
    setIsFinished(true);
  }
  useEffect(() => {
    const handlePlaying = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const videoElement = vidRef.current;

    videoElement.addEventListener("playing", handlePlaying);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("playing", handlePlaying);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col relative w-full">
      <video
        src={video?.video?.url}
        className={`${className}`}
        // controls
        ref={vidRef}
        muted={mute}
        onEnded={handleEnd}
      />
      <div className="absolute flex gap-2 w-full justify-center items-center my-auto inset-0">
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
      {/* <div className="absolute p-[1rem] flex">
        <GoDotFill size={25} className="text-white cursor-pointer" />
      </div> */}
      <div className="absolute flex p-[1rem] bottom-0 gap-[1rem]">
        {!isPlaying && isFinished ? (
          <IoMdRefresh
            size={25}
            className="text-white cursor-pointer"
            onClick={handleReplay}
          />
        ) : (
          ""
        )}
        <div className="flex gap-1">
          {mute ? (
            <BiSolidVolumeMute
              size={25}
              className="text-white cursor-pointer"
              onClick={() => setMute(!mute)}
            />
          ) : (
            <BiSolidVolumeFull
              size={25}
              className="text-white cursor-pointer"
              onClick={() => setMute(!mute)}
            />
          )}
        </div>
        <Libography
          fontSofia
          text={formatTime(currentTime)}
          className="text-white"
        />
      </div>
    </div>
  );
};

export default CustomeVideo;
