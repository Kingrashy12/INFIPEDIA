import React, { useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";

const CoverProfileUploadJs = ({ data, setData }) => {
  const imgRef = useRef();
  const [photo, setPhoto] = useState(null);
  function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log("user-cover:", data);
    TransFormFile(file);
  }
  function TransFormFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setData({ ...data, userCover: reader.result });
      };
    } else {
      setPhoto("");
    }
  }
  return (
    <div className="w-full">
      {photo ? (
        <img src={photo} className="w-full rounded-lg" alt="Avatar" />
      ) : (
        <div className="bg-slate-200 w-full p-3 h-28 rounded-lg flex items-center justify-center">
          <FaFileImage
            onClick={(e) => {
              imgRef.current.click();
            }}
            size={25}
            className="text-blue-500 cursor-pointer"
          />
        </div>
      )}
      <input
        type="file"
        className="hidden"
        ref={imgRef}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default CoverProfileUploadJs;
