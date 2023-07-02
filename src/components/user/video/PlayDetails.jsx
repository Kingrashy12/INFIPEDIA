import React from "react";
import {
  PlayDeatilsContainer,
  PlayHeaderDetails,
  PlayVideoDetails,
} from "../../../styles/components/video/videoitem.styled";
import { Button, HeaderTwo, IconWrap, LinkPography, Span } from "../../../libs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaCommentAlt, FaEye } from "react-icons/fa";
import { FlexBetween } from "../../../styles/common/Global";
import { CgSoftwareDownload } from "react-icons/cg";
import { LikeVideo } from "../../../hooks/getUserById";

const PlayDetails = ({
  play,
  userData,
  isLoading,
  auth,
  navigate,
  UserImage,
  liked,
  likes,
  views,
  like,
  comments,
}) => {
  const userId = auth?._id;
  const videoId = play._id;

  async function likePlay() {
    await LikeVideo(userId, videoId);
  }
  return (
    <PlayDeatilsContainer>
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
            className="text-[18px] cursor-pointer hover:underline"
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

      <div className="flex flex-col mt-2 max-[700px]:p-2 p-5">
        <FlexBetween>
          <div className="flex gap-6 items-center relative justify-between">
            <IconWrap
              title="Likes"
              size={30}
              className="text-2xl mt-1 icons cursor-pointer max-[700px]:text-lg"
              icon={like}
              isLoading={isLoading}
              loadingHeight={`40px`}
              loadingWidth={`40px`}
              onClick={likePlay}
              hasText={
                <Span
                  fontShare
                  fontSemiBold
                  text={likes?.length}
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
                  text={comments?.length}
                  className="text-xs"
                />
              }
            />
            <IconWrap
              title="Views"
              size={25}
              className="text-xl mt-2 icons cursor-pointer max-[700px]:text-lg"
              icon={<FaEye />}
              isLoading={isLoading}
              loadingHeight={`40px`}
              loadingWidth={`40px`}
              hasText={
                <Span
                  fontShare
                  fontSemiBold
                  text={views?.length}
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
              //   onClick={() => dispatch(addTotal())}
              underText={
                <Span fontShare fontSemiBold text={0} className="text-xs" />
              }
            />
          </div>
        </FlexBetween>
      </div>
    </PlayDeatilsContainer>
  );
};

export default PlayDetails;
