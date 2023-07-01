import React, { useState } from "react";
import { Button, HeaderTwo, Libography, Span } from "../../libs";
import UserLinks from "../filter/UserLinks";
import { useDispatch, useSelector } from "react-redux";
import {
  FlexChild,
  StyledBio,
  StyledBioHeader,
} from "../../styles/components/user/user.styled";
import { MdOutlineCalendarMonth, MdVerified } from "react-icons/md";
import { format } from "date-fns";
import { useMemo } from "react";
import EditModel from "../models/EditModel";
import { useNavigate } from "react-router-dom";
import { createChat, followUser } from "../../hooks/getUserById";
import { FollowUser } from "../../store/UsersSlice";

const UserBio = ({
  user,
  post,
  video,
  setPost,
  setVideo,
  isLoading,
  follower,
  followin,
  setFollowin,
  setFollower,
}) => {
  const auth = useSelector((state) => state.credentails);
  const chat = useSelector((state) => state.chats);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const profileId = auth?._id;
  const followId = user._id;
  const userId = auth?._id;
  const navigate = useNavigate();

  const receiverId = user._id;
  const senderId = profileId;

  const [openEdit, setOpenEdit] = useState(false);

  const createdAt = useMemo(() => {
    if (!user?.createdAt) {
      return null;
    }

    return format(new Date(user.createdAt), "MMMM yyyy");
  }, [user?.createdAt]);

  const isfollowing = user?.followers?.includes(profileId);

  async function follow() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      setLoading(true);
      try {
        // dispatch(FollowUser(followId, userId));
        await followUser(followId, profileId);
      } catch (error) {
        console.log({ error: error.message });
      } finally {
        setLoading(false);
      }
    }
  }
  async function Chat() {
    await createChat(senderId, receiverId);
    setTimeout(() => {
      navigate("/messages");
    }, 2000);
  }

  const joined = (
    <div className="flex items-center gap-1">
      <MdOutlineCalendarMonth size={20} />
      <Libography text="Joined" />
      {createdAt}
    </div>
  );
  const followers = (
    <div className="flex items-center gap-1">
      <Libography text="Followers:" className="text-black" />
      <Span text={user.followers?.length} className="text-neutral-500" />
    </div>
  );
  const following = (
    <div className="flex items-center gap-1">
      <Libography text="Following:" className="text-black" />
      <Span text={user.following?.length} className="text-neutral-500" />
    </div>
  );
  return (
    <StyledBio className="flex flex-col text-justify w-full h-auto relative">
      {openEdit && (
        <EditModel open={openEdit} close={() => setOpenEdit(false)} />
      )}
      <div className="flex justify-between relative">
        <div className="flex flex-col">
          <StyledBioHeader>
            <HeaderTwo
              isLoading={isLoading}
              fontSofia
              fontBold
              text={user?.name}
              loadingHeight={`50px`}
              loadingWidth={`200px`}
              className="text-3xl text-justify"
            />
            {user.verified ? (
              <MdVerified
                className="cursor-pointer text-xl"
                title={`${user?.name} is Verified`}
                color="#f95f35"
              />
            ) : (
              ""
            )}
          </StyledBioHeader>
          <Libography
            fontSofia
            fontSemiBold
            isLoading={isLoading}
            loadingHeight={`30px`}
            loadingWidth={`150px`}
            className="text-neutral-700 text-lg max-[700px]:text-sm username"
            text={`@ ${user?.username}`}
          />
        </div>
        <div className="flex gap-5">
          {profileId === user?._id ? (
            ""
          ) : (
            <Button
              isCurrentBg
              text={"Message"}
              isLoading={chat.createStatus === "pending"}
              disabled={chat.createStatus === "pending"}
              loadingHeight="50px"
              loadingWidth={`80px`}
              onClick={Chat}
            />
          )}
          {profileId === user?._id ? (
            <Button
              isCurrentBg
              text="Edit Profile"
              isLoading={isLoading}
              disabled={isLoading}
              loadingHeight="50px"
              loadingWidth={`80px`}
              onClick={() => setOpenEdit(true)}
            />
          ) : (
            <Button
              isCurrentBg
              text={isfollowing ? "Unfollow" : "Follow"}
              isLoading={isLoading || Loading}
              disabled={isLoading || Loading}
              loadingHeight="50px"
              loadingWidth={`80px`}
              onClick={follow}
            />
          )}
        </div>
      </div>

      <Libography
        fontSemiBold
        fontSofia
        text={user?.bio}
        isLoading={isLoading}
        loadingWidth={`25px`}
        loadingHeight={`40px`}
        className="text-neutral-900 mt-3 text-[16px] bio"
      />
      <FlexChild>
        <Libography
          fontSemiBold
          fontSofia
          text={joined}
          isLoading={isLoading}
          loadingWidth={`25px`}
          loadingHeight={`40px`}
          className="text-neutral-500 joined"
        />
      </FlexChild>
      <FlexChild>
        <Libography
          fontSemiBold
          fontSofia
          text={followers}
          isLoading={isLoading}
          loadingWidth={`80px`}
          loadingHeight={`40px`}
        />
        <Libography
          fontSemiBold
          fontSofia
          text={following}
          isLoading={isLoading}
          loadingWidth={`80px`}
          loadingHeight={`40px`}
        />
      </FlexChild>
      <hr className="mt-3" />
      <UserLinks
        h1="Posts"
        h2="Videos"
        h3="Followers"
        h4="Following"
        post={post}
        video={video}
        setPost={setPost}
        setVideo={setVideo}
        follower={follower}
        followin={followin}
        isLoading={isLoading}
        setFollower={setFollower}
        setFollowin={setFollowin}
        loadingHeight="30px"
        loadingWidth={`70px`}
      />
    </StyledBio>
  );
};

export default UserBio;
