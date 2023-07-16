import React, { useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { useDropzone } from "react-dropzone";

const CoverProfileUploadJs = ({ user, userData }) => {
  console.log("usersCover", user);
  const imgRef = useRef();
  const [photo, setPhoto] = useState(null);
  const onDrop = (acceptedFiles) => {
    userData({ ...user, userCover: acceptedFiles });
    console.log("user-cover", acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {user.userCover ? (
        <img src={user.userCover} className="w-56" />
      ) : (
        <div
          {...getRootProps()}
          className={`dropzone ${
            isDragActive ? "active" : ""
          } border-2 border-dashed border-gray-400 rounded-lg p-4`}
        >
          <input {...getInputProps()} />
          <p className="text-center">
            {isDragActive
              ? "Drop the files here..."
              : "Drag & drop files here, or click to select files"}
          </p>
        </div>
      )}
    </>
  );
};

export default CoverProfileUploadJs;
