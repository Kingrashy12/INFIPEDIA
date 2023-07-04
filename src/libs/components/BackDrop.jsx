import React from "react";

const BackDrop = ({ children }) => {
  return (
    <div className="fixed w-full h-full bg-trans p-0 top-0 bottom-0 right-0 left-0 z-[140] flex items-center justify-center">
      {children}
    </div>
  );
};

export default BackDrop;
