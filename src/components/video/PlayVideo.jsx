import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { videosdata } from "../../data/videos";
import {
  Button,
  CustomVideo,
  HeaderOne,
  HeaderTwo,
  IconWrap,
  LinkPography,
  Span,
  Video,
} from "../../libs";
import UserImage from "../UserImage";
import { CgSoftwareDownload } from "react-icons/cg";
import { FlexBetween } from "../../styles/common/Global";
import VideoComment from "../comments/VideoComment";
import Related from "./Related";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { FaCommentAlt } from "react-icons/fa";
import { addTotal } from "../../store/histroySlice";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  PlayHeaderDetails,
  PlayVideoDetails,
  VideoPlayWrapper,
} from "../../styles/components/video/videoitem.styled";
import { getUserById } from "../../hooks/getUserById";

const PlayVideo = () => {
  const downloads = useSelector((state) => state.views.total);
  const { videoId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [liked] = useState(false);
  const auth = useSelector((state) => state.credentails);
  const vdata = useSelector((state) => state.videos.items);
  const play = vdata.find((video) => video._id === videoId);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserById(play.userId);
      setUserData(data);
    };
    getUserData();
  }, [videoId]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    document.title = `${isLoading ? "Loading..." : play?.desc}`;
  });

  const like = liked ? <AiFillHeart /> : <AiOutlineHeart />;
  return (
    <VideoPlayWrapper>
      {isLoading ? (
        <Skeleton variant="rectangular" width={`100%`} height={`30rem`} />
      ) : (
        <Video
          video={play?.video?.url}
          className="h-100 w-full bg-black rounded-none"
          name={play?.desc}
          autoStart
        />
      )}
      <div className="flex flex-col mt-2 max-[700px]:p-2 p-5">
        <HeaderOne
          isLoading={isLoading}
          loadingHeight={`50px`}
          fontBold
          fontSofia
          text={play?.desc}
          className="text-xl max-[700px]:text-sm text-black"
        />
        <FlexBetween>
          <PlayHeaderDetails>
            <UserImage user={play} comment isLoading={isLoading} />
            <PlayVideoDetails>
              <HeaderTwo
                onClick={() => navigate(`/${play?.username}`)}
                fontSemiBold
                fontSofia
                isLoading={isLoading}
                loadingHeight={`25px`}
                loadingWidth={`90px`}
                text={play?.name}
                className="text-xl cursor-pointer hover:underline"
              />
              <Span
                fontSofia
                className="text-sm text-neutral-500 max-[700px]:text-xs"
                text={`${userData?.followers?.length} Followers`}
                isLoading={isLoading}
                loadingHeight={`20px`}
                loadingWidth={`60px`}
              />
            </PlayVideoDetails>
            {auth?._id === play.userId ? (
              <Button
                isCurrentBg
                text="Edit Profile"
                componentsLoading={isLoading}
                loadingHeight={`45px`}
                loadingWidth={`55px`}
              />
            ) : (
              <Button
                // secondary
                isCurrentBg
                text="Follow"
                componentsLoading={isLoading}
                loadingHeight={`45px`}
                loadingWidth={`55px`}
              />
            )}
          </PlayHeaderDetails>
          <div className="flex gap-6 items-center relative justify-between">
            <IconWrap
              title="Likes"
              size={30}
              className="text-2xl mt-1 icons cursor-pointer max-[700px]:text-lg"
              icon={like}
              isLoading={isLoading}
              loadingHeight={`40px`}
              loadingWidth={`40px`}
              hasText={
                <Span
                  fontShare
                  fontSemiBold
                  text={play?.likes?.length}
                  className="text-xs"
                />
              }
            />
            <IconWrap
              title="Comments"
              size={25}
              className="text-xl mt-2 icons cursor-pointer max-[700px]:text-lg"
              icon={<FaCommentAlt />}
              isLoading={isLoading}
              loadingHeight={`40px`}
              loadingWidth={`40px`}
              hasText={
                <Span
                  fontShare
                  fontSemiBold
                  text={play?.comments?.length}
                  className="text-xs"
                />
              }
            />

            <LinkPography
              url={play?.video?.url}
              download={play?.desc}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer icons max-[700px]:text-lg"
              text={<CgSoftwareDownload size={30} />}
              isLoading={isLoading}
              loadingWidth={`40px`}
              loadingHeight={`40px`}
              onClick={() => dispatch(addTotal())}
              underText={
                <Span
                  fontShare
                  fontSemiBold
                  text={downloads}
                  className="text-xs"
                />
              }
            />
          </div>
        </FlexBetween>
      </div>
      <FlexBetween className="p-5/ max-[700px]:p-0 max-[700px]:flex-col">
        {/* <VideoComment user={play} /> */}
        {/* <Related currentTag={play?.tag} currentDesc={play?.desc} /> */}
      </FlexBetween>
    </VideoPlayWrapper>
  );
};

export default PlayVideo;
