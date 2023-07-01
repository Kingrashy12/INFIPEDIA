import React, { useEffect, useState } from "react";
import UserCover from "./UserCover";
// import UserImage from "../UserImage";
import UserBio from "./UserBio";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "./UserImage";
import {
  FilterContainer,
  StyledBio,
  StyledUserWrapper,
} from "../../styles/components/user/user.styled";
import Error from "../posts/Error";
import UserHero from "./UserHero";
import { FetchUserTagPosts, getUserPost } from "../../store/PostSlice";
import { getUserVideos } from "../../store/VideosSlice";
import UserPostFeed from "../posts/UserPostFeed";
import {
  getUserById,
  getUserFollowers,
  getUserFollowing,
} from "../../hooks/getUserById";
import UserFollowers from "../followers/user/UserFollowers";
import UserFollowing from "../followers/user/UserFollowing";
import UserVideoFeed from "../video/UserVideoFeed";

const ProfileCard = ({ user, isLoading, error }) => {
  const [post, setPost] = useState(true);
  const [video, setVideo] = useState(false);
  const [followin, setFollowin] = useState(false);
  const [follower, setFollower] = useState(false);

  const [followingData, setFollowingData] = useState([]);
  const [followersData, setFollowersData] = useState([]);

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
    document.title = `${user?.name} - Infipedia`;
  });

  useEffect(() => {
    dispatch(getUserPost(user.username));
    dispatch(getUserVideos(user.username));
    dispatch(FetchUserTagPosts(user._id));
  });
  return (
    <StyledUserWrapper>
      {error ? (
        <div className="flex items-center mt-16 justify-center">
          <Error />
        </div>
      ) : (
        <>
          <UserHero user={user} isLoading={isLoading} />
          <UserBio
            isLoading={isLoading}
            user={user}
            video={video}
            post={post}
            setPost={setPost}
            setVideo={setVideo}
            setFollower={setFollower}
            setFollowin={setFollowin}
            follower={follower}
            followin={followin}
          />
          <div className="bg-slate-100 flex flex-col w-full h-auto"></div>
        </>
      )}
      {error ? (
        ""
      ) : (
        <FilterContainer className="bg-slate-300">
          {post && <UserPostFeed />}

          {follower && (
            <UserFollowers
              data={followersData}
              currentUserId={userId}
              currentUser={user}
            />
          )}
          {video && <UserVideoFeed user={user} />}
          {followin && (
            <UserFollowing data={followingData} currentUser={user} />
          )}
        </FilterContainer>
      )}
    </StyledUserWrapper>
  );
};

export default ProfileCard;
