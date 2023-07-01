import React, { useEffect, useState } from "react";
import {
  StyledDrop,
  StyledDropItem,
} from "../../../styles/layout/tag/dotdrop.styled";
import { FaTags, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Libography } from "../../../libs";
import { MdReport } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../hooks/api";
import { FollowUser } from "../../../store/UsersSlice";
import { useNavigate } from "react-router-dom";
import { TagPosts, UnTagPosts } from "../../../store/PostSlice";
import { followUser, getUserById } from "../../../hooks/getUserById";

const DotDrop = ({ setTag, post }) => {
  const auth = useSelector((state) => state.credentails);
  const postData = useSelector((state) => state.posts.tagPosts);
  const [userData, setUserData] = useState([]);
  const username = userData.username;
  const uId = auth?._id;
  const isfollowing = userData?.followers?.includes(auth?._id);
  const hasTagged = postData.find((p) => p.postId === post._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = post.userId;
  const [data] = useState({
    postId: post._id,
    userId: auth?._id,
  });

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserById(userId);
      setUserData(data);
    };
    getUserData();
  }, [userId]);

  function check(post) {
    const hash = postData.filter((p) => p.postId === post._id);
  }

  async function follow() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      await followUser(username, uId);
    }
  }

  function Tagpost() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else if (auth?._id) {
      dispatch(TagPosts(data));
    }
    setTag(false);
  }

  function UntagPost(post) {
    const hash = postData.filter((p) => p.postId === post._id);
    hash.map((it) => {
      const tagId = it._id;
      dispatch(UnTagPosts(tagId));
    });
  }

  const follo = (
    <div
      className="flex gap-1 items-center"
      onClick={userData._id === auth?._id ? null : follow}
    >
      {isfollowing ? <FaUserMinus /> : <FaUserPlus />}
      <Libography
        fontSofia
        fontSemiBold
        text={
          userData._id === auth?._id
            ? "Action forbidden"
            : isfollowing
            ? `Unfollow ${post.name}`
            : `Follow ${post.name}`
        }
      />
    </div>
  );
  return (
    <StyledDrop className="shadow shadow-slate-500 z-50">
      <StyledDropItem className="hover:bg-slate-200">
        <Libography fontSofia fontSemiBold text={follo} />
      </StyledDropItem>
      <hr />
      <StyledDropItem
        className="hover:bg-slate-200"
        onClick={() =>
          hasTagged && hasTagged.userId === auth._id
            ? UntagPost(post)
            : Tagpost()
        }
      >
        <FaTags size={18} />
        <Libography
          fontSofia
          fontSemiBold
          text={hasTagged && hasTagged.userId === auth._id ? "Untag" : "Tag"}
        />
      </StyledDropItem>
      <hr />
      <StyledDropItem
        className="hover:bg-slate-200"
        onClick={() => check(post)}
      >
        <MdReport size={18} className="text-red-600" />
        <Libography fontSofia fontSemiBold text="Report" />
      </StyledDropItem>
    </StyledDrop>
  );
};

export default DotDrop;
