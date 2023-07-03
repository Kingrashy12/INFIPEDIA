import axios from "axios";
import { BASE_URL } from "./api";
import { async } from "react-input-emoji";

export async function getUserById(userId) {
  const response = await axios.get(`${BASE_URL}/users/${userId}/get`);

  return response?.data;
}

export async function createChat(senderId, receiverId) {
  await axios.post(`${BASE_URL}/chat`, {
    senderId: senderId,
    receiverId: receiverId,
  });
}

export async function getChatAndFind(userId) {
  const response = await axios.get(`${BASE_URL}/chat/find/all/${userId}`);
  return response?.data;
}

export async function getAllUserChat(userId) {
  const response = await axios.get(`${BASE_URL}/chat/find/all/${userId}`);
  return response?.data;
}

export async function getUserMessages(chatId) {
  const response = await axios.get(`${BASE_URL}/message/${chatId}`);
  return response?.data;
}

export async function addMessage(message) {
  const response = await axios.post(`${BASE_URL}/message/new`, {
    senderId: message.senderId,
    text: message.text,
    chatId: message.chatId,
    textImg: message.textImg,
    url: message.url,
  });
  return response?.data;
}

export async function followUser(followId, uId) {
  const response = await axios.patch(`${BASE_URL}/users/follow/${followId}`, {
    userId: uId,
  });
  return response?.data;
}

export async function getFollowingPost(currentUserId) {
  const response = await axios.get(
    `${BASE_URL}/posts/following/${currentUserId}`
  );
  return response?.data;
}

export async function getUserFollowers(userId) {
  const response = await axios.get(`${BASE_URL}/users/followers/${userId}`);
  return response?.data;
}

export async function getUserFollowing(userId) {
  const response = await axios.get(`${BASE_URL}/users/following/${userId}`);
  return response?.data;
}

export async function getaAllUserLiked(userId) {
  const response = await axios.get(`${BASE_URL}/posts/likes/find/${userId}`);
  return response?.data;
}

export async function getNotification(userId) {
  const response = await axios.get(`${BASE_URL}/notification/${userId}`);
  return response?.data;
}

export async function ReadNotification(userId) {
  const response = await axios.patch(
    `${BASE_URL}/notification/${userId}/updated`
  );
  return response?.data;
}

export async function getTrends() {
  const response = await axios.get(`${BASE_URL}/posts/trend/all`);
  return response?.data;
}

export async function suggestUser() {
  const response = await axios.get(`${BASE_URL}/users/trending/all`);
  return response?.data;
}

export async function getStatusPosts(username, postId) {
  const response = await axios.get(
    `${BASE_URL}/posts/${username}/status/${postId}`
  );
  return response?.data;
}

export async function CommentOnPost(data) {
  const response = await axios.patch(`${BASE_URL}/posts/comment`, {
    postId: data.postId,
    userId: data.userId,
    text: data.text,
    commentsImg: data.commentsImg,
  });
  return response?.data;
}

export async function LikeVideo(userId, videoId) {
  const response = await axios.patch(`${BASE_URL}/videos/like`, {
    userId: userId,
    videoId: videoId,
  });
  return response?.data;
}

export async function CommentsOnVideo(data) {
  const response = await axios.patch(`${BASE_URL}/videos/comments`, {
    text: data.text,
    userId: data.userId,
    videoId: data.videoId,
  });
  return response?.data;
}

export async function FetchVideoComments(vId) {
  const response = await axios.get(`${BASE_URL}/videos/comments/all/${vId}`);
  return response?.data;
}
