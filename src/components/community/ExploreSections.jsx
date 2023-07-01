import React, { useState } from "react";
import { StyledExSection } from "../../styles/components/community/explored.styled";
import { Libography } from "../../libs";
import CommunityLinks from "./CommunityLinks";
import CommunityContent from "./CommunityContent";

const ExploreSections = ({ data, isLoading }) => {
  const [posts, setPosts] = useState(true);
  const [members, setMembers] = useState(false);
  const [ann, setAnn] = useState(false);

  return (
    <StyledExSection>
      <CommunityLinks
        setPosts={setPosts}
        setMembers={setMembers}
        setAnn={setAnn}
        isLoading={isLoading}
        pos={posts}
        mem={members}
        a={ann}
      />
      <CommunityContent
        isLoading={isLoading}
        posts={posts}
        members={members}
        ann={ann}
        setPosts={setPosts}
      />
    </StyledExSection>
  );
};

export default ExploreSections;
