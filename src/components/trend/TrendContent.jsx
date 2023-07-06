import React, { useEffect, useState } from "react";
import {
  StyledTrendContent,
  StyledTrendFilter,
  StyledTrendLinks,
} from "../../styles/components/trend/styledtrend";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Libography } from "../../libs";
import { FetchTrendingVideos } from "../../helper/fetch";
import { getTrends } from "../../hooks/getUserById";
import TrendPosts from "../posts/trend/TrendPosts";
import VideoFeed from "../video/trend/VideoFeed";

const TrendContent = () => {
  const [tposts, setTposts] = useState(true);
  const [tvideos, setTvideos] = useState(false);
  const [vtrenddata, setVtrenddata] = useState([]);
  const [ptrenddata, setPtrenddata] = useState([]);
  const [ploading, setPLoading] = useState(false);
  const [vloading, setVLoading] = useState(false);
  const [perror, setPErro] = useState(false);
  const [verror, setVErro] = useState(false);
  useEffect(() => {
    const getVtrend = async () => {
      setVLoading(true);
      try {
        const data = await FetchTrendingVideos();
        setVtrenddata(data);
      } catch (error) {
        console.log(error);
        setVErro(true);
      } finally {
        setVLoading(false);
      }
    };
    getVtrend();
  }, []);
  useEffect(() => {
    const getPtrend = async () => {
      setPLoading(true);
      try {
        const data = await getTrends();
        setPtrenddata(data);
      } catch (error) {
        console.log(error);
        setPErro(true);
      } finally {
        setPLoading(false);
      }
    };
    getPtrend();
  }, []);
  const scroll = useScrollDirection();
  function navvideo() {
    setTposts(false);
    setTvideos(true);
  }
  function navpost() {
    setTvideos(false);
    setTposts(true);
  }
  return (
    <StyledTrendContent>
      <StyledTrendFilter scroll={scroll}>
        <StyledTrendLinks>
          <Libography
            fontSofia
            text="Posts"
            onClick={navpost}
            className={`${tposts && "border-b-[3px] border-b-black"}`}
          />
          <Libography
            fontSofia
            text="Videos"
            onClick={navvideo}
            className={`${tvideos && "border-b-[3px] border-b-black"}`}
          />
        </StyledTrendLinks>
      </StyledTrendFilter>
      {tposts && (
        <TrendPosts posts={ptrenddata} isLoading={ploading} error={perror} />
      )}
      {tvideos && (
        <VideoFeed videos={vtrenddata} isLoading={vloading} error={verror} />
      )}
    </StyledTrendContent>
  );
};

export default TrendContent;
