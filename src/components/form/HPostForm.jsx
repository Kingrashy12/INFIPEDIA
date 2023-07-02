import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { ShareVideo } from "../../store/VideosSlice";
import { createNewPost } from "../../store/PostSlice";
import { FaPhotoVideo } from "react-icons/fa";

const HPostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef();
  const vidRef = useRef();
  const [vid, setVid] = useState(null);
  const [v, setV] = useState(false);
  const [photo, setPhoto] = useState(null);
  const auth = useSelector((state) => state.credentails);
  const shareload = useSelector((state) => state.videos.shareStatus);
  const postload = useSelector((state) => state.posts.postStatus);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    desc: "",
    userId: auth?._id,
    video: vid,
    photo: "",
  });

  const onVideoChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformVideo(file);
  };

  const TransformVideo = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setVid(reader.result);
        setData({ ...data, video: reader.result });
      };
    } else {
      setVid("");
    }
  };
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
        setData({ ...data, photo: reader.result });
      };
    } else {
      setPhoto("");
    }
  };

  async function handlePost() {
    dispatch(createNewPost(data));
    setData({ ...data, desc: "" });
    setPhoto(null);
  }
  async function handleShareVideo() {
    dispatch(ShareVideo(data));
    setData({ ...data, desc: "" });
    setV(false);
    setVid(null);
  }

  return (
    <StyledViewdCommentsForm className="shadow shadow-slate-400">
      <ViewedPostCommetsFlexBox>
        <ViwedCommentsFormImg
          src={auth?.userProfile?.url || PlaceholderImage}
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
          placeholder={`What your comments, ${auth?.username}?`}
          value={data.desc}
          onChange={(e) => setData({ ...data, desc: e.target.value })}
        />
      </ViewedPostCommetsFlexBox>
      <hr />
      <div className="flex justify-between p-[0.6rem]">
        <div className="flex gap-4">
          <IoMdPhotos
            className="text-green-500 cursor-pointer"
            size={25}
            onClick={(e) => {
              imgRef.current.click();
            }}
          />
          <FaPhotoVideo
            size={25}
            className="text-blue-500 cursor-pointer"
            onClick={(e) => {
              vidRef.current.click();
              setV(true);
            }}
          />
        </div>
        <input
          className="hidden"
          type="file"
          accept="video/mp4"
          ref={vidRef}
          onChange={onVideoChange}
        />

        <Button
          isCurrentBg
          text={v ? "Share Video" : "Share"}
          disabled={
            !data.desc ||
            isLoading ||
            shareload === "pending" ||
            postload === "pending"
          }
          isLoading={
            isLoading || shareload === "pending" || postload === "pending"
          }
          onClick={v ? handleShareVideo : handlePost}
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
      {vid && (
        <div className="flex">
          <video src={vid} className="w-full h-56" />
          <IoClose
            size={30}
            className="font-bold text-white absolute right-6 p-1 rounded-full bg-neutral-500 translate-y-2 cursor-pointer"
            onClick={() => setVid(null)}
          />
        </div>
      )}
    </StyledViewdCommentsForm>
  );
};

export default HPostForm;
