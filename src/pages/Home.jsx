import React, { useEffect } from "react";
import { StyledHome } from "../styles/pages/home.styled";
import { HomeContent, RightNav, SideNavII } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "../store/TrendSlice";
import { FetchFollowingPost, getAllPosts } from "../store/PostSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Home - Infipedia";
  });
  const currentUserId = useSelector((state) => state.credentails?._id);
  useEffect(() => {
    // dispatch(getTrends());
    // dispatch(getAllPosts());
    dispatch(FetchFollowingPost(currentUserId));
  }, [dispatch]);

  return (
    <StyledHome>
      <SideNavII />
      <HomeContent />
      <RightNav />
    </StyledHome>
  );
};

export default Home;
