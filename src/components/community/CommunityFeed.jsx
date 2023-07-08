import React, { useCallback, useEffect, useState } from "react";
import {
  StyledAddBTN,
  StyledCommunityFeed,
} from "../../styles/components/community/community.styled";
import CommunityFilter from "../filter/CommunityFilter";
import { useGetAllCommunityQuery } from "../../store/communityApi";
import CommunityItem from "./CommunityItem";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { HeaderOne } from "../../libs";
import Empty from "./Empty";
import { BsBuildingFillAdd } from "react-icons/bs";
import { useNewCModal } from "../../hooks";
import NewCommunity from "../models/NewCommunity";

const CommunityFeed = () => {
  // const { data, isLoading, error } = useGetAllCommunityQuery();
  // const data = useSelector((state) => state.community.lists);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const newcommunity = useNewCModal();

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
      <NewCommunity />
      {empty && <Empty />}
      <div className="flex flex-wrap w-full gap-6 mt-3 p-5 relative z-0">
        {data.map((item, index) => (
          <CommunityItem key={index} item={item} />
        ))}
      </div>
      <StyledAddBTN
        className="bg-white rounded-full w-[40px] flex justify-center items-center h-[40px] shadow shadow-slate-600"
        onClick={newcommunity.onOpen}
      >
        <BsBuildingFillAdd size={25} className="cursor-pointer relative" />
      </StyledAddBTN>
    </StyledCommunityFeed>
  );
};

export default CommunityFeed;
