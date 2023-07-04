import React, { useEffect } from "react";

const IconBadge = ({ content, color, bgBlue }) => {
  if (content === 0) {
    return null;
  }
  return (
    <div
      id="badge"
      className={`absolute ${
        bgBlue ? `bg-blue-600` : "bg-red-600"
      } text-white w-[18px] pb-[2px] -top-2 rounded-full h-[18px] text-xs border border-white flex items-center justify-center`}
    >
      {content}
    </div>
  );
};

export default IconBadge;
