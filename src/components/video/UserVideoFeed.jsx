import React from "react";
import { useSelector } from "react-redux";
import {
  StyledUserVideo,
  UserVideoContainer,
} from "../../styles/components/video/users/styled.uservideo";
import VideoFilter from "../filter/VideoFilter";
import Empty from "../posts/Empty";
import UserVideoItem from "./UserVideoItem";

const UserVideoFeed = ({ user }) => {
  const auth = useSelector((state) => state.credentails);
  const data = useSelector((state) => state.videos.userVideos);
  const userId = data.find((v) => v.userId === auth?._id);
  const empty = data.length === 0;
  return (
    <StyledUserVideo className="shadow shadow-slate-500">
      <VideoFilter userId={userId} currentUser={user} authId={auth?._id} />
      <hr />
      <UserVideoContainer>
        {empty ? (
          <Empty
            emptyText="Empty bucket"
            name="No videos avaliable"
            extra="Try agagin"
          />
        ) : (
          data.map((video, index) => (
            <UserVideoItem video={video} key={index} />
          ))
        )}
      </UserVideoContainer>
    </StyledUserVideo>
  );
};

export default UserVideoFeed;
