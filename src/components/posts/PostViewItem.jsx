import React, { useState } from "react";
import {
  StyledViewContainer,
  StyledViewPostImage,
  StyledViewUserDeatils,
  StyledViewUserImg,
} from "../../styles/components/post/view/view.styled";
import { DateFormatter, Libography, TruncatedText } from "../../libs";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import ViewActionBtn from "./actions/ViewActionBtn";
import PostviewImage from "../user/info/postviewImage";
import ViewdPostImage from "./ViewdPostImage";

const PostViewItem = ({ posts, isLoading, liked, likes, comments }) => {
  const navigate = useNavigate();
  const [max, setMax] = useState(70);
  const [less, setLess] = useState(false);

  function show() {
    setMax(1000);
    setLess(true);
  }
  function hide() {
    setMax(70);
    setLess(false);
  }

  const s = (
    <Libography text="See more" onClick={show} className="font-semibold" />
  );
  const h = (
    <Libography text="See less" onClick={hide} className="font-semibold" />
  );
  return (
    <StyledViewContainer className="shadow shadow-slate-500">
      <StyledViewUserDeatils>
        <PostviewImage isLoading={isLoading} post={posts} />
        <div className="flex flex-col text-justify">
          <Libography
            fontBold
            className="text-lg hover:underline cursor-pointer"
            fontSofia
            loadingWidth="100px"
            loadingHeight="30px"
            text={posts?.name}
            isLoading={isLoading}
            onClick={() => navigate(`/${posts?.username}`)}
          />
          <DateFormatter
            item={posts}
            isLoading={isLoading}
            loadingHeight={"25px"}
            loadingWidth={"80px"}
          />
        </div>
        {posts?.verified ? (
          <MdVerified size={20} color="#f95f35" className="translate-y-1" />
        ) : (
          ""
        )}
      </StyledViewUserDeatils>
      <TruncatedText
        loadingWidth="100"
        loadingHeight="80px"
        className="flex text-sm cursor-pointer p-3"
        fontMedium
        text={posts?.body}
        maxLength={max}
        underText={less ? h : s}
        fontPoppins
        isLoading={isLoading}
        variant="text"
      />
      {posts?.postImg ? (
        <ViewdPostImage post={posts} isLoading={isLoading} />
      ) : (
        ""
      )}
      <hr />
      <ViewActionBtn
        post={posts}
        isLoading={isLoading}
        liked={liked}
        likes={likes}
        comments={comments}
      />
    </StyledViewContainer>
  );
};

export default PostViewItem;
