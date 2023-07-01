import React, { useEffect, useState } from "react";
import UserImage from "../UserImage";
import { Button } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";

const VideoComment = ({ user }) => {
  const [body, setBody] = useState("");
  const [clicked, setClicked] = useState(false);
  const res = {
    user: user?.name,
    username: user?.username,
    userProfile: user?.userProfile,
    body: body,
  };

  function onComment() {
    user.comments.push({ res });
    setBody("");
    console.log("comments:", res);
  }

  return (
    <div className="bg-slate-100 p-3 flex flex-col rounded-md w-1/2 h-auto relative">
      <FlexBetween className="w-full">
        <div className="flex gap-1 items-center">
          <UserImage comment user={user} />
          <p className="font-sofia text-base font-semibold">{user?.name}</p>
        </div>
        <FlexBetween className="w-96">
          <input
            type="text"
            placeholder="What you comment?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="p-2 outline-none font-semibold focus:border-b-red-500 w-full bg-transparent ml-1 border-b"
          />
          <Button
            secondary
            text={`${user?.comments.length} Comment`}
            className="w-36"
            onClick={onComment}
            disabled={!body}
          />
        </FlexBetween>
      </FlexBetween>
      <div className="flex flex-col gap-4 mt-3">
        {user.comments.map((c) => (
          <div className="flex items-center gap-2">
            <UserImage user={c} comment />
            <div className="flex flex-col">
              <p className="font-sofia text-base font-semibold">{c.user}</p>
              <span className="font-sofia text-sm font-semibold text-neutral-400">
                {c.body}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComment;
