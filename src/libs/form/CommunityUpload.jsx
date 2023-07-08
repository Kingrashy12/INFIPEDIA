import React, { useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import Libography from "../Texts/Libography";

const ImageUploadJs = ({ setForm, form }) => {
  const imgRef = useRef();
  const [photo, setPhoto] = useState(null);
  function handleImageUpload(e) {
    const file = e.target.files[0];
    // console.log("user-profile", form);
    TransFormFile(file);
  }
  function TransFormFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setForm({ ...form, cprofile: reader.result });
      };
    } else {
      setPhoto("");
    }
  }
  return (
    <div>
      {photo ? (
        <img src={photo} className="w-36 rounded-full" alt="Avatar" />
      ) : (
        <div className="flex flex-col gap-2 items-center">
          <FaFileImage
            onClick={(e) => {
              imgRef.current.click();
            }}
            size={25}
            className="text-blue-500 cursor-pointer"
          />
          <Libography
            fontSemiBold
            fontSofia
            text="Select a file"
            className="text-neutral-400"
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

export default ImageUploadJs;
