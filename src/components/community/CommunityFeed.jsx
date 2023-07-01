import React, { useCallback, useEffect, useState } from "react";
import { StyledCommunityFeed } from "../../styles/components/community/community.styled";
import CommunityFilter from "../filter/CommunityFilter";
import { useGetAllCommunityQuery } from "../../store/communityApi";
import CommunityItem from "./CommunityItem";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { HeaderOne } from "../../libs";
import Empty from "./Empty";

const CommunityFeed = () => {
  // const { data, isLoading, error } = useGetAllCommunityQuery();
  // const data = useSelector((state) => state.community.lists);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  const getCommunities = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/community`);
      const fetched = await response?.data;
      setData(fetched);
    } catch (error) {
      console.log({ error: error.message });
    }
  });

  useEffect(() => {
    getCommunities();
    if (data.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  });

  return (
    <StyledCommunityFeed>
      <CommunityFilter />
      {empty && <Empty />}
      <div className="flex flex-wrap w-full gap-6 mt-3 p-5 relative z-0">
        {data.map((item, index) => (
          <CommunityItem key={index} item={item} />
        ))}
      </div>
    </StyledCommunityFeed>
  );
};

export default CommunityFeed;
