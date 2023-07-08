import React, { useEffect, useRef, useState } from "react";
import VideoControll from "./VideoControll";
import "./video.css";

const CustomeVideo = ({ className, src, fullPage, nameOndownload, name }) => {
  const vidRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [fullView, setFullview] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [maxTime, setMaxTime] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.addEventListener(
        "loadedmetadata",
        handleLoadedMetadataDuration
      );
    }

    return () => {
      if (vidRef.current) {
        vidRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadataDuration
        );
      }
    };
  }, []);

  const handleLoadedMetadataDuration = () => {
    if (vidRef.current) {
      const duration = vidRef.current.duration;
      setTotalTime(duration);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setPlaybackSpeed(newSpeed);
    if (vidRef.current) {
      vidRef.current.playbackRate = newSpeed;
    }
  };

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      vidRef.current.addEventListener("canplaythrough", handleVideoLoaded);
    }
    return () => {
      if (vidRef.current) {
        vidRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        vidRef.current.removeEventListener("canplaythrough", handleVideoLoaded);
      }
    };
  }, []);
  const handleLoadedMetadata = () => {
    setMaxTime(vidRef.current.duration);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

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
    if (disabled) return null;
    vidRef.current.play();
  }
  function pause() {
    if (disabled) return null;
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

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (vidRef.current) {
      vidRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (!isDragging && vidRef.current) {
      setCurrentTime(vidRef.current.currentTime);
    }
  };

  const handleSeekStart = () => {
    setIsDragging(true);
    if (vidRef.current) {
      vidRef.current.pause(); // Pause the video during seeking
    }
  };

  const handleSeekEnd = () => {
    setIsDragging(false);
    // if (vidRef.current) {
    //   vidRef.current.currentTime = currentTime;
    // }
    if (vidRef.current) {
      vidRef.current.playbackRate = 1.0; // Reset playback speed to normal
      vidRef.current.play(); // Resume playing the video after seeking
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (vidRef.current) {
      vidRef.current.currentTime = seekTime;
    }
  };

  function playOnkey(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    }
    console.log("onkey:", e);
  }
  function playOnClick(e) {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }
  const fastForward = () => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 2.0; // Increase playback speed for fast forward
      vidRef.current.currentTime += 10; // Fast forward by 10 seconds
    }
  };
  const backForward = () => {
    if (vidRef.current) {
      vidRef.current.playbackRate = 2.0; // Increase playback speed for fast forward
      vidRef.current.currentTime -= 10; // Fast forward by 10 seconds
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "ArrowRight") {
        event.preventDefault();
        fastForward();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "ArrowLeft") {
        event.preventDefault();
        backForward();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const togglePlay = () => {
    if (vidRef.current) {
      if (vidRef.current.paused) {
        vidRef.current.play();
      } else {
        vidRef.current.pause();
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `${name}`;
    link.click();
  };

  return (
    <div
      className={`flex flex-col video-wrapper relative w-full bg-black ${
        isHovered ? "show-controls" : "hide-controls"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={src}
        className={`${className} relative cursor-pointer ${
          fullView && "h-screen"
        }`}
        // controls
        ref={vidRef}
        muted={mute}
        onEnded={handleEnd}
        onKeyDown={playOnkey}
        onClick={playOnClick}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeekStart}
        onSeeked={handleSeekEnd}
        style={{ display: isVideoLoaded ? "block" : "none" }}
        preload="auto"
        title={name}
      />
      <VideoControll
        play={play}
        pause={pause}
        currentTime={currentTime}
        formatTime={formatTime}
        fullPage={fullPage}
        isFinished={isFinished}
        isPlaying={isPlaying}
        setMute={setMute}
        mute={mute}
        disabled={disabled}
        setDisabled={setDisabled}
        handleReplay={handleReplay}
        setFull={setFullview}
        full={fullView}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        vidRef={vidRef}
        handleSeek={handleSeek}
        maxTime={maxTime}
        forward={fastForward}
        backward={backForward}
        handleSpeed={handleSpeedChange}
        playSpeed={playbackSpeed}
        handleDownload={handleDownload}
        totalTime={totalTime}
      />
    </div>
  );
};

export default CustomeVideo;
