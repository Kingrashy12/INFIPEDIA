import React from "react";
import {
  StyledUserPostFeedContainer,
  UserPostWrapp,
} from "../../styles/components/post/userpost.styled";
import Empty from "./Empty";
import UserPostItem from "./UserPostItem";

const UserPostContainer = ({ empty, posts }) => {
  return (
    <StyledUserPostFeedContainer>
      <UserPostWrapp className={`mt-[10px] z-0 flex-col flex gap-3`}>
        {empty ? (
          <Empty
            emptyText="Empty bucket"
            name={"No post available"}
            extra={"right now"}
          />
        ) : (
          posts?.map((post, index) => <UserPostItem post={post} key={index} />)
        )}
      </UserPostWrapp>
    </StyledUserPostFeedContainer>
  );
};

export default UserPostContainer;
