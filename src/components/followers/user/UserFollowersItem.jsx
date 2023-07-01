import React from "react";
import {
  StyledUserFollowersImage,
  StyledUserFollowersItem,
} from "../../../styles/components/followers/user.styled";
import { Male } from "../../../asset";
import { Button, Libography } from "../../../libs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { followUser, getUserById } from "../../../hooks/getUserById";

const UserFollowersItem = ({ user, currentUser }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.credentails);
  const following = user.following.includes(auth?._id);
  const isfollowing = user.followers.includes(auth?._id);
  const [userdata, setUserdata] = useState([]);
  const followId = user._id;
  const profileId = auth?._id;

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserById(user._id);
      setUserdata(data);
    };
    getUser();
  });
  const f = <Libography text={following ? "Follow back" : "Follow"} />;
  const If = <Libography text={isfollowing && "Unfollow"} />;
  async function follow() {
    await followUser(followId, profileId);
  }

  return (
    <StyledUserFollowersItem>
      <div className="flex gap-5 items-center">
        <StyledUserFollowersImage src={user?.userProfile?.url || Male} />
        <Libography
          fontSofia
          text={user?.name}
          className="cursor-pointer hover:underline text-[19px]"
          onClick={() => navigate(`/${user.username}`)}
        />
      </div>
      {userdata._id === auth?._id ? (
        <Libography fontSofia text={`You're following ${currentUser.name}`} />
      ) : (
        <Button isCurrentBg text={isfollowing ? If : f} onClick={follow} />
      )}
    </StyledUserFollowersItem>
  );
};

export default UserFollowersItem;
