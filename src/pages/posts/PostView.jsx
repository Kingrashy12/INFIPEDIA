import React, { useEffect, useState } from "react";
import { StyledviewWrapper } from "../../styles/pages/posts/postview.styled";
import {
  PostViewFeed,
  RightNav,
  SideNavII,
  SideNavLinks,
} from "../../components";
import { useParams } from "react-router-dom";
import { getStatusPosts } from "../../hooks/getUserById";

const PostView = () => {
  const { username, postId } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getStatusPosts(username, postId);
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, [username, postId]);

  useEffect(() => {
    document.title = `${post?.name} @${post?.username}`;
  });
  return (
    <StyledviewWrapper>
      <SideNavII />
      <PostViewFeed post={post} isLoading={isLoading} />
      <RightNav />
    </StyledviewWrapper>
  );
};

export default PostView;
