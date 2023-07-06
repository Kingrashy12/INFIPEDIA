import React, { useEffect, useState } from "react";
import {
  LikedUserImg,
  StyledLikedByContainer,
  StyledLikesContainer,
  StyledLikesHeader,
} from "../../styles/components/comments/videocomeents";
import { HeaderOne, Libography } from "../../libs";
import { getUserById } from "../../hooks/getUserById";
import { FetchUsersWhoLiked } from "../../helper/fetch";
import { PlaceholderImage } from "../../asset";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

const LikesContainer = ({ video, likes, isLoading }) => {
  const videoId = video._id;
  const [likedUsers, setLikedUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getLikedInfo = async () => {
      const data = await FetchUsersWhoLiked(videoId);
      setLikedUsers(data);
    };
    getLikedInfo();
  }, [likes]);
  return (
    <StyledLikesContainer className="bg-slate-300">
      <StyledLikesHeader>
        <HeaderOne
          fontSofia
          text="Liked by"
          isLoading={isLoading}
          loadingHeight={"30px"}
          loadingWidth={"100px"}
        />
      </StyledLikesHeader>
      <StyledLikedByContainer>
        {likedUsers?.map((user, index) => (
          <div className="flex items-center gap-2" key={index}>
            {isLoading ? (
              <Skeleton variant="circular" width="40px" height="40px" />
            ) : (
              <LikedUserImg src={user?.userProfile?.url || PlaceholderImage} />
            )}
            <Libography
              fontSofia
              text={user?.name}
              className="cursor-pointer hover:underline"
              onClick={() => navigate(`/${user.username}`)}
              isLoading={isLoading}
              loadingHeight={"30px"}
              loadingWidth={"150px"}
            />
          </div>
        ))}
      </StyledLikedByContainer>
    </StyledLikesContainer>
  );
};

export default LikesContainer;
