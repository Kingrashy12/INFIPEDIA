import React from "react";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { StyledUserPostFeedContainer } from "../../styles/components/post/userpost.styled";
import UserTagItem from "./tag/UserTagItem";

const UserTaggedPost = () => {
  const data = useSelector((state) => state.posts.userTagPost);
  const empty = data?.length === 0;
  return (
    <StyledUserPostFeedContainer>
      <div
        className={`mt-[10px] z-0 flex-col flex gap-3 justify-center items-center`}
      >
        {empty ? (
          <Empty
            emptyText="Empty bucket"
            name={"No post available"}
            extra={"right now"}
          />
        ) : (
          data.map((post, index) => <UserTagItem post={post} key={index} />)
        )}
      </div>
    </StyledUserPostFeedContainer>
  );
};

export default UserTaggedPost;
