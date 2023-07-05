import React, { useRef, useState } from "react";
import { ProfileModelStyle } from "../../styles/components/user/user.styled";
import { FlexBetween } from "../../styles/common/Global";
import { Button, CoverProfileUploadJs, HeaderOne } from "../../libs";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { UpdatedUserCover } from "../../store/authSlice";
import { FaFileImage } from "react-icons/fa";

const ProfileCoverModel = ({ setOpenCover }) => {
  const auth = useSelector((state) => state.credentails);
  const isLoading = auth.coverEditStatus === "pending";
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userCover: "",
    userId: auth?._id,
  });
  function handleUpdate() {
    dispatch(UpdatedUserCover(user));
    if (auth.coverEditStatus === "success") {
      setOpenCover(false);
      window.location.reload();
    }
  }
  const imgRef = useRef();
  const [photo, setPhoto] = useState(null);
  function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log("user-cover", user);
    console.log("photo:", photo);
    TransFormFile(file);
  }
  function TransFormFile(file) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setUser({ ...user, userCover: reader.result });
      };
    } else {
      setPhoto("");
    }
  }
  return (
    <ProfileModelStyle className="shadow shadow-black">
      <FlexBetween>
        <HeaderOne
          fontSemiBold
          fontSofia
          text="Update cover photo"
          className="text-xl"
        />
        <IoClose
          size={25}
          onClick={() => setOpenCover(false)}
          className="p-[2px] bg-neutral-400 rounded-full cursor-pointer"
        />
      </FlexBetween>
      <div className="flex items-center justify-center flex-col">
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
        {/* <CoverProfileUploadJs user={user} userData={setUser} /> */}
      </div>
      <Button
        isCurrentBg
        disabled={!user.userCover || isLoading}
        isLoading={isLoading}
        text="Save"
        onClick={handleUpdate}
      />
    </ProfileModelStyle>
  );
};

export default ProfileCoverModel;
