import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ExploredItem, SideNavLinks } from "../../components";
import { StyledCommunity } from "../../styles/pages/community.styled";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { useParams } from "react-router-dom";
import { getCommunity } from "../../helper/fetch";

const ExploredCommunity = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getExplored = async () => {
      setIsLoading(true);
      try {
        const data = await getCommunity(slug);
        setData(data);
        console.log("community here:", data);
      } catch (error) {
        console.log({ error: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    getExplored();
  }, [slug]);

  useEffect(() => {
    document.title = `${
      isLoading ? "Loading..." : data.cname
    } Community - Infipedia`;
  });
  return (
    <StyledCommunity>
      <SideNavLinks />
      <ExploredItem isLoading={isLoading} data={data} />
    </StyledCommunity>
  );
};

export default ExploredCommunity;
