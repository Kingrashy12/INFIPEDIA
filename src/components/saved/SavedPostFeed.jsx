import React, { useState } from "react";
import { StyledSavedFeed } from "../../styles/pages/saved/saved.styled";
import { useSelector } from "react-redux";
import { HeaderOne, Libography } from "../../libs";
import SavedPostItem from "./SavedPostItem";

const SavedPostFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const saved = useSelector((state) => state.posts.savedPosts);
  return (
    <StyledSavedFeed>
      <div className="flex justify-between">
        <HeaderOne
          fontSemiBold
          fontSofia
          text="Your Saved"
          className="text-xl"
        />
        <Libography fontSemiBold fontSofia text={saved?.length} />
      </div>
      <div className="flex flex-wrap gap-3">
        {saved.map((item, index) => (
          <SavedPostItem item={item} isLoading={isLoading} />
        ))}
      </div>
    </StyledSavedFeed>
  );
};

export default SavedPostFeed;
