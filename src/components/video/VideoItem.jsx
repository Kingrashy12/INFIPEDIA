import React, { useCallback, useEffect, useState } from "react";
import VideoWrapper from "./VideoWrapper";
import { DropSearchFilter, Loader } from "../../libs";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { StyledVideoItem } from "../../styles/components/video/videoitem.styled";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import Error from "../posts/Error";

const VideoItem = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const vdata = useSelector((state) => state.videos);

  useEffect(() => {
    if (vdata.fetchStatus === "pending") {
      setIsLoading(true);
    } else if (vdata.fetchStatus !== "pending") {
      setIsLoading(false);
    }

    if (vdata.fetchStatus === "rejected" || vdata.fetchError) {
      setError(true);
    }
  }, [vdata]);

  return (
    <StyledVideoItem>
      <div className="flex justify-between w-full">
        <DropSearchFilter data={vdata.items} video navigate={navigate} />
      </div>
      <hr />
      <div
        className={`flex flex-wrap gap-3 mt-3 w-full ${
          error && "justify-center"
        }`}
      >
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : error ? (
          <Error />
        ) : (
          vdata.items.map((video) => <VideoWrapper video={video} />)
        )}
      </div>
    </StyledVideoItem>
  );
};

export default VideoItem;
