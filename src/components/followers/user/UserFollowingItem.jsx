import React from "react";
import {
  StyledUserFollowersImage,
  StyledUserFollowersItem,
} from "../../../styles/components/followers/user.styled";
import { Male } from "../../../asset";
import { Button, Libography } from "../../../libs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { followUser, getUserById } from "../../../hooks/getUserById";

const UserFollowingItem = ({ user, currentUser }) => {
  const auth = useSelector((state) => state.credentails);
  const following = user.followers.includes(auth?._id);
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  const followId = user._id;
  const profileId = auth?._id;

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserById(user._id);
      setUserdata(data);
    };
    getUser();
  });

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
        <Libography fontSofia text={`${currentUser.name} is following you`} />
      ) : (
        <Button
          isCurrentBg
          text={following ? "Unfollow" : "Follow"}
          onClick={follow}
        />
      )}
    </StyledUserFollowersItem>
  );
};

export default UserFollowingItem;
