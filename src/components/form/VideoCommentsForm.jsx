import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  StyledViewdCommentsForm,
  ViewedPostCommetsFlexBox,
  ViwedCommentsFormImg,
} from "../../styles/components/community/viewedpost.styled";
import { PlaceholderImage } from "../../asset";
import Textarea from "@mui/joy/Textarea";
import { Button } from "../../libs";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { CommentsOnVideo } from "../../hooks/getUserById";

const VideoCommentsForm = ({ video }) => {
  const user = useSelector((state) => state.credentails);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    text: "",
    userId: user?._id,
    videoId: video._id,
  });

  async function shareComments() {
    setIsLoading(true);
    try {
      await CommentsOnVideo(data);
      setData({ ...data, text: "" });

      toast.success(`Success`, { position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error(error, { position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  }

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
          value={data.text}
          onChange={(e) => setData({ ...data, text: e.target.value })}
        />
      </ViewedPostCommetsFlexBox>
      <hr />
      <div className="flex justify-between p-[0.6rem]">
        <Button
          text="Comment"
          isCurrentBg
          disabled={isLoading || !data.text}
          isLoading={isLoading}
          onClick={shareComments}
        />
      </div>
    </StyledViewdCommentsForm>
  );
};

export default VideoCommentsForm;
