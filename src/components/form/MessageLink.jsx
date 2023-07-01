import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { Button } from "../../libs";

const MessageLink = ({ url, setUrl }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex relative">
      {open ? (
        <div className="flex bg-white p-2 rounded-md flex-col justify-between w-36 h-36 absolute bottom-[1rem] shadow shadow-black">
          <input
            type="text"
            className="w-full p-1 rounded-md outline-none bg-slate-400 placeholder:text-black text-black"
            placeholder="Enter url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button text="Save" secondary onClick={() => setOpen(false)} />
        </div>
      ) : (
        <AiOutlineLink
          size={25}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      )}
    </div>
  );
};

export default MessageLink;
