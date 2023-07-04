import React from "react";
import { FlexBetween } from "../../styles/common/Global";
import { Button, Libography } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/PostSlice";

const MangeActions = ({ selected, posts, setSelected }) => {
  const ds = useSelector((state) => state.posts.deleteStatus);
  const dispatch = useDispatch();
  const isLoading = ds === "pending";
  const postId = selected;
  function del() {
    dispatch(deletePost(postId));
  }
  console.log("selected:", selected);
  return (
    <FlexBetween className="relative p-[6px] actionFlex">
      <div className="flex gap-3">
        <Libography
          fontSemiBold
          fontSofia
          text={`${selected?.length}/${posts.length}`}
          className="text-[#f95f35]"
        />
        <Libography
          fontSemiBold
          fontSofia
          text="You can delete or edit post selected"
        />
      </div>
      <div className="flex gap-5">
        <Button
          secondary
          text="Edit"
          className="w-32"
          disabled={!selected}
          onClick={() => {}}
        />
        <Button
          isCurrentBg
          text="Delete"
          className="w-32"
          disabled={!selected}
          onClick={del}
          isLoading={isLoading}
        />
      </div>
    </FlexBetween>
  );
};

export default MangeActions;
