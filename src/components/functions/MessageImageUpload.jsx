import React, { useRef, useState } from "react";
import { BsFileEarmarkImageFill } from "react-icons/bs";

export const MessageImageUpload = ({ photo, setPhoto, setTextImg }) => {
  const imgRef = useRef();

  function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file);
  }
  function TransformFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setTextImg(reader.result);
      };
    } else {
      setPhoto("");
    }
  }
  return (
    <>
      <BsFileEarmarkImageFill
        size={30}
        className="text-black cursor-pointer"
        onClick={() => imgRef.current.click()}
      />
      <input
        type="file"
        className="hidden"
        ref={imgRef}
        onChange={handleImageUpload}
      />
    </>
  );
};

// export default MessageImageUpload;
