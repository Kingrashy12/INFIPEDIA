import React from "react";
import { Slider, Button, Tooltip, Popover, Grid } from "@mui/material";
import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import "../styles/css/videocontrol.css";
import { makeStyles, withStyles } from "@mui/styles";
import { FaPause, FaPlay } from "react-icons/fa";
import { CgPlayTrackNextR, CgPlayTrackPrevR } from "react-icons/cg";
import {
  MiddleFunBtn,
  StyledBoxControll,
  StyledInnerControl,
  StyledPlayFunBtn,
} from "../styles/js/controls";
import { TbReload } from "react-icons/tb";

const useStyles = makeStyles({
  volumeSlider: {
    width: "100px",
    color: "#f95f35",
    transition: "1s ease-in-out",
  },

  bottomIcons: {
    color: "#999",
    padding: "12px 8px",

    "&:hover": {
      color: "#fff",
    },
  },
});

const PrettoSlider = withStyles({
  root: {
    height: "20px",
    color: "##f95f35",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "##f95f35",
    border: "2px solid currentColor",
    marginTop: -1,
    marginLeft: 1,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
    width: "100%",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

const VideoControl = ({
  playing,
  onPlayPause,
  onForward,
  onRewind,
  played,
  onSeek,
  onSeekMouseUp,
  Volume,
  onVolumeSeekUp,
  onVolumeChangeHandler,
  mute,
  onMute,
  duration,
  currentTime,
  controlRef,
  hasEnded,
  onReplay,
}) => {
  const classes = useStyles();
  return (
    <div className="control_Container" ref={controlRef}>
      <MiddleFunBtn>
        <StyledPlayFunBtn>
          <CgPlayTrackPrevR fontSize="medium" onDoubleClick={onRewind} />
        </StyledPlayFunBtn>

        <StyledPlayFunBtn onClick={onPlayPause}>
          {playing ? (
            <FaPause fontSize="medium" />
          ) : (
            <FaPlay fontSize="medium" />
          )}
        </StyledPlayFunBtn>

        <StyledPlayFunBtn>
          <CgPlayTrackNextR fontSize="medium" onDoubleClick={onForward} />
        </StyledPlayFunBtn>
      </MiddleFunBtn>

      {/*  */}
      <div className="bottom__container">
        <div className="slider__container">
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeekMouseUp}
          />
        </div>
        <StyledBoxControll>
          <StyledInnerControl>
            <div className="icon__btn">
              {hasEnded ? (
                <TbReload onClick={onReplay} />
              ) : playing ? (
                <FaPause fontSize="medium" />
              ) : (
                <FaPlay fontSize="medium" />
              )}
            </div>
            <div className="icon__btn">
              <SkipNext fontSize="medium" />
            </div>
            <div className="icon__btn" onClick={onMute}>
              {mute ? (
                <VolumeOff fontSize="medium" />
              ) : (
                <VolumeUp fontSize="medium" />
              )}
            </div>

            <Slider
              className={`${classes.volumeSlider}`}
              onChange={onVolumeChangeHandler}
              value={mute ? 0 : Volume * 100}
              onChangeCommitted={onVolumeSeekUp}
            />
            <span>
              {currentTime} : {duration}
            </span>
          </StyledInnerControl>
        </StyledBoxControll>
      </div>
    </div>
  );
};

export default VideoControl;
