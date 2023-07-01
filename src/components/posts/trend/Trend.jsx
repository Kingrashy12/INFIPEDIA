import React, { useEffect, useState } from "react";
import { StyledTrend } from "../../../styles/components/post/trend/trend.styled";
import { HeaderOne } from "../../../libs";
import { getTrends } from "../../../hooks/getUserById";
import TrendPostsItem from "./TrendPostsItem";

const Trend = () => {
  const [trendData, setTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("trends:", trendData);
  useEffect(() => {
    setIsLoading(true);
    const getPostsTrend = async () => {
      try {
        const data = await getTrends();
        setTrend(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPostsTrend();
  }, []);
  return (
    <StyledTrend className="bg-slate-200">
      <HeaderOne fontSofia text="Trending" />
      <hr />
      {trendData?.map((trend) => (
        <TrendPostsItem trend={trend} />
      ))}
    </StyledTrend>
  );
};

export default Trend;
