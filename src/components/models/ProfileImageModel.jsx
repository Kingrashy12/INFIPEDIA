import React, { useState } from "react";
import { ProfileModelStyle } from "../../styles/components/user/user.styled";
import { FlexBetween } from "../../styles/common/Global";
import { Button, HeaderOne, ImageUploadJs } from "../../libs";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { UpdatedUserProfile } from "../../store/authSlice";

const ProfileImageModel = ({ setOpen }) => {
  const auth = useSelector((state) => state.credentails);
  const isLoading = auth.profileEditStatus === "pending";
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userProfile: "",
    userId: auth?._id,
  });
  console.log("profile:", user.userProfile);

  function handleUpdate() {
    dispatch(UpdatedUserProfile(user));
    if (auth.profileEditStatus === "success") {
      setOpen(false);
      window.location.reload();
    }
  }
  return (
    <ProfileModelStyle className="shadow shadow-black">
      <FlexBetween>
        <HeaderOne
          fontSemiBold
          fontSofia
          text="Update Profile"
          className="text-xl"
        />
        <IoClose
          size={25}
          onClick={() => setOpen(false)}
          className="p-[2px] bg-neutral-400 rounded-full cursor-pointer"
        />
      </FlexBetween>
      <div className="flex items-center justify-center flex-col">
        <ImageUploadJs data={user} setData={setUser} />
      </div>
      <Button
        isCurrentBg
        disabled={!user.userProfile || isLoading}
        isLoading={isLoading}
        text="Save"
        onClick={handleUpdate}
      />
    </ProfileModelStyle>
  );
};

export default ProfileImageModel;
