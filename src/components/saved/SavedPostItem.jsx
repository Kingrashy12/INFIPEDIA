import React, { useEffect, useMemo, useState } from "react";
import {
  FlexItem,
  StyledAction,
  StyledSavedItem,
} from "../../styles/pages/saved/saved.styled";
import {
  Libography,
  PostImage,
  PostImageBody,
  Span,
  TruncatedText,
} from "../../libs";
import { MdDelete, MdVerified } from "react-icons/md";
import { formatDistanceToNowStrict } from "date-fns";
import { FlexBetween } from "../../styles/common/Global";
import { BASE_URL } from "../../hooks/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { unSavePost } from "../../store/PostSlice";

const SavedPostItem = ({ item, isLoading }) => {
  const auth = useSelector((state) => state.credentails);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  async function onLike() {
    if (!auth?._id) {
      return null;
    } else {
      try {
        await axios.patch(`${BASE_URL}/posts/like`, {
          userId: auth?._id,
          postId: item._id,
        });
        toast.success("Success", { position: "top-center" });
      } catch (error) {
        console.log({ error: error.message });
        toast.error({ error: error.message }, { position: "top-center" });
      }
    }
  }
  function removeSave(item) {
    dispatch(unSavePost(item));
  }

  useEffect(() => {
    if (item.likes.includes(auth?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [item]);

  const createdAt = useMemo(() => {
    if (!item?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(item?.createdAt));
  }, [item?.createdAt]);
  return (
    <StyledSavedItem className="shadow shadow-black">
      <FlexItem>
        <PostImage user={item} />
        <div className="flex flex-col">
          <Libography fontSemiBold fontSofia text={item?.name} />
          <Span
            fontSemiBold
            fontSofia
            text={`@ ${item.username}`}
            className="text-neutral-500 text-sm"
          />
        </div>
        {item?.verified && (
          <MdVerified
            className="cursor-pointer text-base -translate-y-2"
            title={`${item?.name} is Verified`}
            color="#f95f35"
          />
        )}
        <Span
          fontSemiBold
          fontSofia
          text={createdAt}
          className="text-neutral-400 text-sm -translate-y-2"
        />
      </FlexItem>
      <hr />
      <TruncatedText
        fontSemiBold
        fontSofia
        className="p-3"
        text={item?.body}
        maxLength={70}
      />
      {item?.postImg && <PostImageBody post={item} ImageHeight={"9rem"} />}
      {!item?.postImg && <div className="h-[9rem]" />}
      {/* <PostImageBody post={item} ImageHeight={"9rem"} /> */}
      <StyledAction>
        <hr />
        <FlexBetween>
          <div className="flex gap-1 items-center">
            {liked ? (
              <AiFillHeart
                size={23}
                className="cursor-pointer text-red-500"
                onClick={() => {
                  onLike();
                }}
              />
            ) : (
              <AiOutlineHeart
                size={23}
                className="cursor-pointer text-red-500"
                onClick={() => {
                  onLike();
                }}
              />
            )}
            <span className="text-red-500">{item.likes?.length}</span>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => removeSave(item)}
          >
            <MdDelete size={23} className="text-green-500" />
          </div>
        </FlexBetween>
      </StyledAction>
    </StyledSavedItem>
  );
};

export default SavedPostItem;
