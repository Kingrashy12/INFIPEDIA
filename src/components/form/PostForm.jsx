import React, { useRef, useState } from "react";
import { GT63, Male, Rashy } from "../../asset";
import { FlexBetween } from "../../styles/common/Global";
import { IoMdPhotos } from "react-icons/io";
import { Button, PostImage } from "../../libs";
import { FaMapMarkedAlt, FaPhotoVideo } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { FormInput, StyledPost } from "../../styles/components/postform.styled";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import { ShareVideo } from "../../store/VideosSlice";
import { createNewPost } from "../../store/PostSlice";

const PostForm = () => {
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
  console.log("data on state:", data);
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
    <StyledPost className="shadow shadow-black">
      <div className="flex justify-between">
        <PostImage user={auth} />
        <FormInput
          type="text"
          value={data.desc}
          onChange={(e) => setData({ ...data, desc: e.target.value })}
          placeholder={`What on your mind today ${auth.name}?`}
          className="p-2 rounded-lg bg-slate-300 text-black font-sofia font-semibold outline-none placeholder:text-black focus:border-sky-500 focus:border"
        />
      </div>
      <hr />
      <FlexBetween>
        <div className="flex gap-6">
          <IoMdPhotos
            className="text-green-500 cursor-pointer"
            onClick={(e) => {
              imgRef.current.click();
            }}
          />
          <FaPhotoVideo
            className="text-blue-500 cursor-pointer"
            onClick={(e) => {
              vidRef.current.click();
              setV(true);
            }}
          />
          <FaMapMarkedAlt className="text-lime-600 cursor-pointer" />
          <RiLiveFill className="text-red-500 cursor-pointer" />
          <input
            className="hidden"
            type="file"
            accept="image/"
            ref={imgRef}
            onChange={onImageChange}
          />
          <input
            className="hidden"
            type="file"
            accept="video/mp4"
            ref={vidRef}
            onChange={onVideoChange}
          />
        </div>
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
      </FlexBetween>
      {photo && (
        <div className="flex">
          <img src={photo} className="w-full h-56" />
          <span
            className="font-bold text-2xl text-white absolute right-6 cursor-pointer"
            onClick={() => setPhoto(null)}
          >
            &times;
          </span>
        </div>
      )}
      {vid && (
        <div className="flex">
          <video src={vid} className="w-full h-56" />
          <span
            className="font-bold text-2xl text-white absolute right-6 cursor-pointer"
            onClick={() => setVid(null)}
          >
            &times;
          </span>
        </div>
      )}
    </StyledPost>
  );
};

export default PostForm;
