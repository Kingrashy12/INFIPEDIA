import React, { useEffect, useRef, useState } from "react";
import VideoControl from "./VideoControl";
import ReactPlayer from "react-player";
import "../styles/css/video.css";

export const formatTime = (time) => {
  //formarting duration of video
  if (isNaN(time)) {
    return "00:00";
  }

  const date = new Date(time * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  if (hours) {
    //if video have hours
    return `${hours}:${minutes.toString().padStart(2, "0")} `;
  } else return `${minutes}:${seconds}`;
};

const CustomeVideo = ({ src, height, className }) => {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);
  let count = 0;
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;
  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };
  function handleReplay() {
    setVideoState({ ...videoState, playing: videoState.playing });
  }
  const rewindHandler = () => {
    //Rewinds the video player reducing 5
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
  };
  const fastFowardHandler = () => {
    //FastFowards the video player by adding 10
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };
  const progressHandler = (state) => {
    if (count < 3) {
      // toggling player control container

      controlRef.current.style.visibility = "hidden";
    } else if (controlRef.current.style.visibility === "visible") {
      count += 10;
    }
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };
  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value) / 100 });
  };

  const seekMouseUpHandler = (e, value) => {
    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };
  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const mouseMoveHandler = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  };

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";

  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);

  const formatDuration = formatTime(duration);
  const [ended, setEnded] = useState(false);
  function handleEnd() {
    setEnded(true);
  }

  function vidCtrl(e) {
    const vid = document.querySelector("video");
    const key = e.code;

    if (key === "ArrowLeft") {
      vid.currentTime -= 5;
      if (vid.currentTime < 0) {
        vid.pause();
        vid.currentTime = 0;
      }
    } else if (key === "ArrowRight") {
      vid.currentTime += 5;
      if (vid.currentTime > vid.duration) {
        vid.pause();
        vid.currentTime = 0;
      }
    } else if (key === "Space") {
      e.preventDefault();
      if (vid.paused || vid.ended) {
        vid.play();
      } else {
        vid.pause();
      }
    }
  }

  function playClick() {
    setVideoState({ ...videoState, playing: true });
  }

  return (
    <div className="player__wrapper" onMouseDown={mouseMoveHandler}>
      <ReactPlayer
        ref={videoPlayerRef}
        className={`player ${className}`}
        url={src}
        width="100%"
        height={height}
        playing={playing}
        muted={muted}
        volume={volume}
        onProgress={progressHandler}
        onEnded={handleEnd}
        onClickPreview={playClick}
      />
      <VideoControl
        onPlayPause={playPauseHandler}
        playing={playing}
        onForward={fastFowardHandler}
        onRewind={rewindHandler}
        played={played}
        onSeek={seekHandler}
        onSeekMouseUp={seekMouseUpHandler}
        Volume={volume}
        onVolumeChangeHandler={volumeChangeHandler}
        onVolumeSeekUp={volumeSeekUpHandler}
        mute={muted}
        onMute={muteHandler}
        duration={formatDuration}
        currentTime={formatCurrentTime}
        controlRef={controlRef}
        hasEnded={ended}
        onReplay={handleReplay}
      />
    </div>
  );
};

export default CustomeVideo;
