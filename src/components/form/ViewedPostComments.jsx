import React from "react";
import { useSelector } from "react-redux";
import {
  StyledViewdCommentsForm,
  ViewedPostCommetsFlexBox,
  ViwedCommentsFormImg,
} from "../../styles/components/community/viewedpost.styled";
import { PlaceholderImage } from "../../asset";
import Textarea from "@mui/joy/Textarea";
import { Button } from "../../libs";
import { IoMdPhotos } from "react-icons/io";

const ViewedPostComments = () => {
  const user = useSelector((state) => state.credentails);
  return (
    <StyledViewdCommentsForm className="shadow shadow-slate-400">
      <ViewedPostCommetsFlexBox>
        <ViwedCommentsFormImg
          src={user?.userProfile?.url || PlaceholderImage}
          alt="User-Profile"
        />
        <Textarea
          sx={{
            width: "100%",
            fontFamily: "'Sofia Sans Semi Condensed', sans-serif",
            color: "#000",
            "::placeholder": { color: "#000" },
          }}
          autoComplete="Yes"
          placeholder={`What your comments, ${user?.username}?`}
        />
      </ViewedPostCommetsFlexBox>
      <hr />
      <div className="flex justify-between p-[1rem]">
        <IoMdPhotos
          className="text-green-500 cursor-pointer text-[18px]"
          // onClick={(e) => {
          //   imgRef.current.click();
          // }}
        />
        <Button text="Comment" isCurrentBg />
      </div>
    </StyledViewdCommentsForm>
  );
};

export default ViewedPostComments;
