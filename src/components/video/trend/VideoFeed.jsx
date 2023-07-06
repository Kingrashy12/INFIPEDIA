import React from "react";
import { TrendItemWrapper } from "../../../styles/components/trend/styledtrend";
import { Loader } from "../../../libs";
import Error from "../../posts/Error";
import TrendItem from "./TrendItem";
import Empty from "../../posts/Empty";

const VideoFeed = ({ videos, error, isLoading }) => {
  const empty = videos.length === 0;
  return (
    <TrendItemWrapper>
      {isLoading ? (
        <div className="flex justify-center items-center flex-shrink">
          <Loader isLoading={isLoading} />
        </div>
      ) : error ? (
        <Error />
      ) : empty ? (
        <Empty
          emptyText="Empty"
          name="No trending videos found"
          extra="refresh or try again later"
        />
      ) : (
        videos?.map((video, index) => <TrendItem video={video} />)
      )}
    </TrendItemWrapper>
  );
};

export default VideoFeed;
