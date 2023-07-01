import React, { useEffect, useState } from "react";
import { videosdata } from "../../data/videos";
import RelatedVideoContainer from "./RelatedVideoContainer";
import { HeaderOne } from "../../libs";

const Related = ({ currentTag, currentDesc }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col pb-16 relative gap-6 w-full mt-0">
      <HeaderOne
        headerTwo
        isLoading={isLoading}
        variant="text"
        text="You might like"
        loadingHeight={`30px`}
        loadingWidth={`150px`}
        fontSemiBold
        fontSofia
        className="text-xl text-center max-[700px]:text-lg"
      />
      <div className="flex flex-col gap-3 relative">
        {videosdata
          .filter((p) => p.tag === currentTag && p.desc !== currentDesc)
          .map((video, index) => (
            <RelatedVideoContainer
              isLoading={isLoading}
              video={video}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Related;
