import React from "react";
import { StyledUserFollowers } from "../../../styles/components/followers/user.styled";
import UserFollowersItem from "./UserFollowersItem";
import Empty from "../../posts/Empty";
import { useSelector } from "react-redux";
import { Button } from "../../../libs";

const UserFollowers = ({ data, currentUserId, currentUser }) => {
  const auth = useSelector((state) => state.credentails);
  const empty = data.length === 0;
  return (
    <StyledUserFollowers>
      {empty ? (
        <div className="flex items-center gap-[1rem] flex-col">
          <Empty
            name={
              currentUserId === auth?._id
                ? `You have no followers yet`
                : `${currentUser.name} has no followers yet`
            }
            emptyText={"Empty bucket"}
            extra={
              currentUserId === auth?._id
                ? "Follow a user"
                : `Follow ${currentUser.name}`
            }
          />
        </div>
      ) : (
        data?.map((user, index) => (
          <UserFollowersItem
            user={user}
            key={index}
            currentUserId={currentUserId}
            currentUser={currentUser}
          />
        ))
      )}
    </StyledUserFollowers>
  );
};

export default UserFollowers;
