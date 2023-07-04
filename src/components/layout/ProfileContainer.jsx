import React, { useEffect, useState } from "react";
import {
  StyledProfileContainer,
  StyledProfileContainerHeader,
} from "../../styles/components/layout/profilecontainer.styled";
import ProfileCard from "../user/ProfileCard";
import BackArrow from "../BackArrow";
import { HeaderOne, Libography } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollowers, getUserFollowing } from "../../hooks/getUserById";
import { FetchUserTagPosts, getUserPost } from "../../store/PostSlice";
import { getUserVideos } from "../../store/VideosSlice";

const ProfileContainer = ({ isLoading, user, error }) => {
  const [followingData, setFollowingData] = useState([]);
  const [followersData, setFollowersData] = useState([]);
  const userposts = useSelector((state) => state.posts.userPosts);
  const usertag = useSelector((state) => state.posts.userTagPost);
  const posts = userposts.length + usertag.length;

  const userId = user._id;

  useEffect(() => {
    const getFollowersdata = async () => {
      const data = await getUserFollowers(userId);
      setFollowersData(data);
    };
    getFollowersdata();
  }, [userId]);

  useEffect(() => {
    const getFollowingdata = async () => {
      const data = await getUserFollowing(userId);
      setFollowingData(data);
    };
    getFollowingdata();
  }, [userId]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${user?.name} - @${user?.username} Infipedia`;
  });

  useEffect(() => {
    dispatch(getUserPost(user.username));
    dispatch(getUserVideos(user.username));
    dispatch(FetchUserTagPosts(user._id));
  });
  return (
    <StyledProfileContainer>
      <StyledProfileContainerHeader>
        <div className="flex items-center gap-5">
          <BackArrow />
          <HeaderOne fontSofia text={user?.name} />
        </div>
        <div className="flex">
          <Libography fontSofia text={`${posts} Posts`} />
        </div>
      </StyledProfileContainerHeader>
      <ProfileCard
        isLoading={isLoading}
        user={user}
        error={error}
        followingData={followingData}
        followersData={followersData}
        userId={userId}
      />
    </StyledProfileContainer>
  );
};

export default ProfileContainer;
