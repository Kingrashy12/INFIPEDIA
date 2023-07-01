import React, { useEffect, useState } from "react";
import {
  CommentsFormWrapper,
  CommentsInput,
} from "../../styles/components/models/postcomments";
import { Button } from "../../libs";
import CAvatar from "../user/CAvatar";
import { useDispatch, useSelector } from "react-redux";
import { CommentsOnPost, getAllPosts } from "../../store/PostSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";

const CommentsForm = ({ post, currentPostId }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.credentails);
  const [text, setText] = useState({
    body: "",
    postId: currentPostId,
    userId: auth?._id,
  });
  const [loading, setLoading] = useState(false);
  const cstatus = useSelector((state) => state.posts.commentStatus);

  function keyComments(e) {
    setText({ ...text, body: e.target.value });
  }

  async function add() {
    // dispatch(CommentsOnPost(text));
    setLoading(true);
    try {
      await axios.patch(`${BASE_URL}/posts/comment`, {
        text: text.body,
        postId: post._id,
        userId: auth?._id,
      });
      toast.success(`You commented on ${post.name}'s Post`, {
        position: "top-center",
      });
      setText({ ...text, body: "" });
    } catch (error) {
      console.log({ error: error.message });
      toast.error({ error: error.message }, { position: "top-center" });
    } finally {
      setLoading(false);
      dispatch(getAllPosts());
    }
  }
  useEffect(() => {
    const input = document.getElementById("input");
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        add();
      }
    });
  }, []);

  return (
    <CommentsFormWrapper>
      <CAvatar src={auth?.userProfile?.url} />
      <CommentsInput
        id="input"
        placeholder={`What your comments?`}
        value={text.body}
        onChange={keyComments}
        // onKeyDownCapture={() => alert("entered")}
        className="bg-slate-400 outline-none placeholder:text-black font-sofia font-semibold text-black"
      />
      <Button
        text="Comment"
        isCurrentBg
        disabled={!text.body}
        onClick={add}
        isLoading={loading}
        // isLoading={cstatus === "pending"}
      />
    </CommentsFormWrapper>
  );
};

export default CommentsForm;
