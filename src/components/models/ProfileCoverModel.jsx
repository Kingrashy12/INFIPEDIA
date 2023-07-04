import React, { useState } from "react";
import { ProfileModelStyle } from "../../styles/components/user/user.styled";
import { FlexBetween } from "../../styles/common/Global";
import { Button, CoverProfileUploadJs, HeaderOne } from "../../libs";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { UpdatedUserCover } from "../../store/authSlice";

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
        <CoverProfileUploadJs user={user} userData={setUser} />
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
