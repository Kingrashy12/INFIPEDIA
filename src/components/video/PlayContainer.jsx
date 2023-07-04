import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FetchVideoComments, getUserById } from "../../hooks/getUserById";
import PlayVideo from "./PlayVideo";
import PlayDetails from "../user/video/PlayDetails";
import UImge from "../user/UImge";
import { FetchVideoLikes, FetchVideoViews } from "../../helper/fetch";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { StyledPlayContainer } from "../../styles/components/video/videoitem.styled";
import VideoComment from "../comments/VideoComment";
import PlayButtonContainer from "./PlayButtonContainer";

const PlayContainer = () => {
  const [vlikes, setVlikes] = useState([]);
  // const [vdownlaod, setVdownload] = useState([]);
  const [vviews, setVviews] = useState([]);
  const [vcomments, setVcomments] = useState([]);
  const { videoId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [liked] = useState(false);
  const auth = useSelector((state) => state.credentails);
  const vdata = useSelector((state) => state.videos.items);
  const play = vdata.find((video) => video._id === videoId);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const vId = play._id;

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserById(play.userId);
      setUserData(data);
    };
    getUserData();
  }, [videoId]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const getLikes = async () => {
      const data = await FetchVideoLikes(vId);
      setVlikes(data);
    };
    getLikes();
  }, [vlikes]);
  useEffect(() => {
    const getViews = async () => {
      const data = await FetchVideoViews(vId);
      setVviews(data);
    };
    getViews();
  }, [vviews]);
  useEffect(() => {
    const getComments = async () => {
      const data = await FetchVideoComments(vId);
      setVcomments(data);
    };
    getComments();
  }, [vcomments]);

  const like = vlikes.find((id) => id === auth?._id) ? (
    <AiFillHeart />
  ) : (
    <AiOutlineHeart />
  );

  useEffect(() => {
    document.title = `${isLoading ? "Loading..." : play?.desc}`;
  });

  return (
    <StyledPlayContainer>
      <PlayVideo play={play} isLoading={isLoading} liked={liked} />
      <PlayDetails
        play={play}
        isLoading={isLoading}
        userData={userData}
        auth={auth}
        navigate={navigate}
        UserImage={UImge}
        liked={liked}
        likes={vlikes}
        views={vviews}
        comments={vcomments}
        like={like}
      />
      <PlayButtonContainer
        likes={vlikes}
        comments={vcomments}
        video={play}
        isLoading={isLoading}
      />
    </StyledPlayContainer>
  );
};

export default PlayContainer;
