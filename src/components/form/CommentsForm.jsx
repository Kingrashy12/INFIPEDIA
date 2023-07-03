import React, { useEffect, useRef, useState } from "react";
import {
  CommentsFormWrapper,
  CommentsInput,
} from "../../styles/components/models/postcomments";
import { Button } from "../../libs";
import CAvatar from "../user/CAvatar";
import { useDispatch, useSelector } from "react-redux";
import { CommentsOnPost, getAllPosts } from "../../store/PostSlice";
import { IoMdPhotos } from "react-icons/io";
import { CommentOnPost } from "../../hooks/getUserById";

const CommentsForm = ({ post, text, setText, setPhoto, Close }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.credentails);
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef();

  const onImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setText({ ...text, commentsImg: reader.result });
      };
    } else {
      setPhoto("");
    }
  };

  const cstatus = useSelector((state) => state.posts.commentStatus);
  // const isLoading = cstatus === "pending";

  async function add() {
    setIsLoading(true);
    // dispatch(CommentsOnPost(text));
    await CommentOnPost(text);
    setText({ ...text, body: "" });
    setIsLoading(false);
    Close(false);
  }

  return (
    <CommentsFormWrapper>
      <IoMdPhotos
        className="text-green-500 cursor-pointer"
        size={25}
        onClick={() => {
          imgRef.current.click();
        }}
      />

      <Button
        text="Comment"
        isCurrentBg
        disabled={!text.text || isLoading}
        onClick={add}
        isLoading={isLoading}
      />
      <input
        type="file"
        ref={imgRef}
        className="hidden"
        onChange={onImageChange}
      />
    </CommentsFormWrapper>
  );
};

export default CommentsForm;
