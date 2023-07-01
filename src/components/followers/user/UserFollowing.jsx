import React from "react";
import { StyledUserFollowers } from "../../../styles/components/followers/user.styled";
import UserFollowingItem from "./UserFollowingItem";
import Empty from "../../posts/Empty";
import { useSelector } from "react-redux";

const UserFollowing = ({ data, currentUser }) => {
  const auth = useSelector((state) => state.credentails);
  const empty = data.length === 0;
  return (
    <StyledUserFollowers>
      {empty ? (
        <Empty
          name={
            currentUser._id === auth?._id
              ? "You have no following"
              : `${currentUser.name} has not followed anyone`
          }
          emptyText={"Empty bucket"}
          extra={currentUser._id === auth?._id ? "Yet follow a user" : "Yet"}
        />
      ) : (
        data?.map((user, index) => (
          <UserFollowingItem
            user={user}
            key={index}
            currentUser={currentUser}
          />
        ))
      )}
    </StyledUserFollowers>
  );
};

export default UserFollowing;
