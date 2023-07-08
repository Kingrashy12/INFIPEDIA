import React, { useState } from "react";
import { CgArrowsExpandDownLeft, CgArrowsExpandUpRight } from "react-icons/cg";
import { ImDownload, ImFolderDownload } from "react-icons/im";
import { VscSettings } from "react-icons/vsc";

const RightControls = ({
  setFullSreen,
  fullSreen,
  playbackSpeed,
  handleSpeedChange,
  download,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-[2rem] max-[700px]:gap-[12px] relative">
      <VscSettings
        size={25}
        className="text-white cursor-pointer max-[800px]:hidden"
      />
      {fullSreen ? (
        <CgArrowsExpandDownLeft
          className="text-white cursor-pointer text-[25px] max-[800px]:text-[18px]"
          onClick={() => setFullSreen(false)}
        />
      ) : (
        <CgArrowsExpandUpRight
          className="text-white cursor-pointer text-[25px] max-[800px]:text-[18px]"
          onClick={() => setFullSreen(true)}
        />
      )}

      <ImDownload
        className="text-white cursor-pointer text-[25px] max-[800px]:text-[18px]"
        onClick={() => download()}
      />

      {/* <input
        type="number"
        id="speed"
        min="0.5"
        max="6"
        step="0.5"
        value={playbackSpeed}
        onChange={handleSpeedChange}
      /> */}
    </div>
  );
};

export default RightControls;
