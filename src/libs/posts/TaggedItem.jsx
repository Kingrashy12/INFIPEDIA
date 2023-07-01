import React, { useState } from "react";
import {
  StyledTagImg,
  TaggedItemContent,
  TaggedUserContainer,
  TaggedUserContent,
  TaggedUserImg,
  TaggedUserPost,
} from "../../styles/libs/posts/tagged.styled";
import Libography from "../Texts/Libography";
import TruncatedText from "../Texts/TruncatedText";
import { MdVerified } from "react-icons/md";

const TaggedItem = ({ post, isLoading }) => {
  const createdAt = new Date(post?.postmade);
  const day = createdAt.getDate();
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

  const formattedTime = createdAt.toLocaleString("default", { month: "long" });

  return (
    <TaggedItemContent className="shadow shadow-black">
      {post?.postImg?.url && <StyledTagImg src={post.postImg?.url} />}
      <TaggedUserContainer>
        <TaggedUserContent>
          <TaggedUserImg src={post?.postprofile?.url} />
          <div className="flex flex-col">
            <Libography fontSofia text={post.postname} />
            <Libography
              fontRoboto
              text={`${day} ${formattedTime}`}
              className="text-neutral-400 text-[13px]"
            />
          </div>
          {post?.postverified && (
            <MdVerified color="#f95f35" className="translate-y-[6px]" />
          )}
        </TaggedUserContent>
        <TruncatedText
          maxLength={max}
          fontPoppins
          text={post?.body}
          underText={less ? h : s}
        />
      </TaggedUserContainer>
    </TaggedItemContent>
  );
};

export default TaggedItem;
