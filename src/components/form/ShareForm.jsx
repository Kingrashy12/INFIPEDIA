import React, { useRef, useState } from "react";
import {
  StyledShareForm,
  StyledShareImg,
} from "../../styles/components/form/shareform";
import { FlexBetween } from "../../styles/common/Global";
import { IoClose } from "react-icons/io5";
import { useShareModal } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { PlaceholderImage } from "../../asset";
import { Textarea } from "@mui/joy";
import { Button } from "../../libs";
import { IoMdPhotos } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { createNewPost } from "../../store/PostSlice";
import { ShareVideo } from "../../store/VideosSlice";

const ShareForm = () => {
  const user = useSelector((state) => state.credentails);
  const shareload = useSelector((state) => state.videos.shareStatus);
  const postload = useSelector((state) => state.posts.postStatus);
  const sharemodal = useShareModal();
  function Close() {
    sharemodal.onClose();
  }

  const imgRef = useRef();
  const vidRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [vid, setVid] = useState(null);
  const [v, setV] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    desc: "",
    userId: user?._id,
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
    setTimeout(() => {
      Close();
    }, 3000);
  }
  async function handleShareVideo() {
    dispatch(ShareVideo(data));
    setData({ ...data, desc: "" });
    setV(false);
    setVid(null);
    setTimeout(() => {
      Close();
    }, 3000);
  }

  return (
    <StyledShareForm>
      <FlexBetween>
        <IoClose
          className="p-1 bg-neutral-400 cursor-pointer rounded-full"
          size={28}
          onClick={Close}
        />
        <StyledShareImg src={user?.userProfile?.url || PlaceholderImage} />
      </FlexBetween>
      <div className="pb-6 relative h-auto overflow-y-auto">
        <Textarea
          placeholder={`What on your mind today?`}
          sx={{
            fontWeight: "700",
            fontFamily: "'Sofia Sans Semi Condensed', sans-serif",
            color: "#000",
            fontSize: "19px",
          }}
          color="#000"
          value={data.desc}
          onChange={(e) => setData({ ...data, desc: e.target.value })}
        />
      </div>
      <hr />
      <FlexBetween>
        <div className="flex gap-3">
          <IoMdPhotos
            className="text-green-500 cursor-pointer font-sofia"
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
          <input
            type="file"
            accept="image/"
            ref={imgRef}
            onChange={onImageChange}
            className="hidden"
          />
          <input
            type="file"
            ref={vidRef}
            onChange={onVideoChange}
            className="hidden"
            accept="video/mp4"
          />
        </div>
        <Button
          isCurrentBg
          text={v ? "Share Video" : "Share"}
          disabled={
            !data.desc || shareload === "pending" || postload === "pending"
          }
          isLoading={shareload === "pending" || postload === "pending"}
          onClick={v ? handleShareVideo : handlePost}
        />
      </FlexBetween>
      {photo && (
        <div className="flex flex-col relative w-full">
          <img
            src={photo}
            alt="Post Photo"
            className="w-full rounded-[10px] h-48"
          />
          <IoClose
            className="p-1 bg-neutral-400 cursor-pointer rounded-full absolute right-2 top-2"
            size={28}
            onClick={() => setPhoto(null)}
          />
        </div>
      )}
      {vid && (
        <div className="flex flex-col relative w-full">
          <video
            src={vid}
            alt="Post Video"
            className="w-full rounded-[10px] h-48 bg-black"
          />
          <IoClose
            className="p-1 bg-neutral-400 cursor-pointer rounded-full absolute right-2 top-2"
            size={28}
            onClick={() => setVid(null)}
          />
        </div>
      )}
    </StyledShareForm>
  );
};

export default ShareForm;
