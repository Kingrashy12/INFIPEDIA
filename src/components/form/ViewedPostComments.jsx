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
import { IoMdPhotos } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { CommentOnPost } from "../../hooks/getUserById";

const ViewedPostComments = ({ post }) => {
  const user = useSelector((state) => state.credentails);
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const imgRef = useRef();

  const [data, setData] = useState({
    text: "",
    userId: user?._id,
    commentsImg: "",
    postId: post?._id,
  });

  const onImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setData({ ...data, commentsImg: reader.result });
      };
    } else {
      setPhoto("");
    }
  };

  async function shareComments() {
    setIsLoading(true);
    try {
      await CommentOnPost(data);
      setData({ ...data, text: "" });
      setPhoto(null);
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
        <IoMdPhotos
          className="text-green-500 cursor-pointer"
          size={25}
          onClick={(e) => {
            imgRef.current.click();
          }}
        />
        <Button
          text="Comment"
          isCurrentBg
          disabled={isLoading || !data.text}
          isLoading={isLoading}
          onClick={shareComments}
        />
        <input
          className="hidden"
          type="file"
          accept="image/"
          ref={imgRef}
          onChange={onImageChange}
        />
      </div>
      {photo && (
        <div className="flex">
          <img src={photo} className="w-full h-56" />
          <IoClose
            size={30}
            className="font-bold text-white absolute right-6 p-1 rounded-full bg-neutral-500 translate-y-2 cursor-pointer"
            onClick={() => setPhoto(null)}
          />
        </div>
      )}
    </StyledViewdCommentsForm>
  );
};

export default ViewedPostComments;
