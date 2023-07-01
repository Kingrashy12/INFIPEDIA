import React from "react";

const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="bg-black p-5 w-full relative mt-5 pt-16">
      <div className="flex justify-center items-center gap-3">
        <h2 className="font-sofia text-2xl font-semibold text-white cursor-pointer max-[700px]:text-lg">
          Infipedia
        </h2>
        <p className="text-white font-share max-[700px]:text-sm">
          &copy; April 2023 - {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
