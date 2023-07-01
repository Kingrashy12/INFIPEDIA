import React from "react";
import { StyledCommunityContent } from "../../styles/components/community/communitycontent.styled";

const CommunityContent = ({ members, ann, posts, isLoading }) => {
  return (
    <StyledCommunityContent>
      {ann && <p>Anncoument</p>}
      {members && <p>Members</p>}
      {posts && <p>Post</p>}
    </StyledCommunityContent>
  );
};

export default CommunityContent;
