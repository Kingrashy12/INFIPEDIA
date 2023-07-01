import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ExploredItem, SideNavLinks } from "../../components";
import { StyledCommunity } from "../../styles/pages/community.styled";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { useParams } from "react-router-dom";

const ExploredCommunity = () => {
  const { communityId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getExplored = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/community/${communityId}`);
      const fetched = await response?.data;
      setData(fetched);
      console.log("community here:", fetched);
    } catch (error) {
      console.log({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  }, [communityId]);

  useEffect(() => {
    getExplored();
  }, [getExplored]);

  useEffect(() => {
    document.title = `${data.cname} Community - Infipedia`;
  });
  return (
    <StyledCommunity>
      <SideNavLinks />
      <ExploredItem isLoading={isLoading} data={data} />
    </StyledCommunity>
  );
};

export default ExploredCommunity;
