import React from "react";
import { useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import { Button } from "../styles/layout/SrcollTop";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      className={`fixed ${
        visible ? "flex" : "hidden"
      } /bg-white bg z-40 shadow text-white shadow-slate-500 outline-none rounded-lg p-2 bottom-16 right-9 cursor-pointer hover:opacity-70`}
      onClick={scrollToTop}
    >
      <IoArrowUp size={25} />
    </Button>
  );
};

export default ScrollTop;
