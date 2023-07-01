import React from "react";
import { TagPostItemContent } from "../../../libs";
import styled from "styled-components";

const UserTagItem = ({ post }) => {
  return (
    <StyledUserTag>
      <TagPostItemContent post={post} isLoading={false} />
    </StyledUserTag>
  );
};

export default UserTagItem;

const StyledUserTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    gap: 0;
  }
`;
