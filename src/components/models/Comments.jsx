import React, { useEffect, useState } from "react";
import { FlexBetween } from "../../styles/common/Global";
import { DateFormatter, Libography, TruncatedText } from "../../libs";
import { IoClose } from "react-icons/io5";
import {
  CommentsWrapper,
  FormWrapper,
  PostCommentsDImage,
  StyledPComments,
} from "../../styles/components/models/postcomments";
import { PlaceholderImage } from "../../asset";
import { useSelector } from "react-redux";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@mui/joy";
import CommentsForm from "../form/CommentsForm";

const Comments = ({ setOpen, post, cId }) => {
  const auth = useSelector((state) => state.credentails);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState({
    text: "",
    postId: post?._id,
    userId: auth?._id,
    commentsImg: "",
  });

  const c = (
    <div className="flex gap-1 p-3">
      <Libography text="Comments on" />
      <Libography
        className="text-blue-500 cursor-pointer hover:underline"
        text={`@${post?.username}`}
        onClick={() => navigate(`/${post?.username}`)}
      />
      <Libography text="post" />
    </div>
  );

  return (
    <StyledPComments className="shadow shadow-slate-800">
      <FormWrapper>
        <IoClose
          size={30}
          onClick={() => setOpen(false)}
          className="text-white p-1 bg-neutral-400 cursor-pointer rounded-full mb-2"
        />

        <CommentsWrapper>
          <PostCommentsDImage src={post?.userProfile?.url} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <Libography fontSofia text={post.name} className="text-[18px]" />
              {post?.verified && <MdVerified size={20} color="#f95f35" />}
              <Libography fontExtra text="-" />
              <DateFormatter item={post} className="translate-y-0" />
            </div>
            <TruncatedText
              maxLength={70}
              text={post?.body}
              fontPoppins
              fontMedium
            />
          </div>
        </CommentsWrapper>

        <Libography fontSofia text={c} />
        <FlexBetween>
          <PostCommentsDImage src={auth?.uProfile?.url || PlaceholderImage} />
          <Textarea
            placeholder="What your comment!"
            sx={{
              color: "#000",
              fontWeight: 600,
              fontFamily: "'Sofia Sans Semi Condensed', sans-serif",
              "::placeholder": { color: "#000" },
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
            color="#000"
            value={text.text}
            onChange={(e) => setText({ ...text, text: e.target.value })}
          />
        </FlexBetween>
        <CommentsForm
          post={post}
          currentPostId={post.id}
          text={text}
          setText={setText}
          Close={setOpen}
        />
      </FormWrapper>
    </StyledPComments>
  );
};

export default Comments;
