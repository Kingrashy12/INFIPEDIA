import React, { useEffect, useRef, useState } from "react";
import {
  addMessage,
  getUserById,
  getUserMessages,
} from "../../hooks/getUserById";
import {
  ChatImage,
  StyledChatBoxContainer,
  StyledChatBoxHeader,
  StyledSenderContainer,
} from "../../styles/components/chats/chatboxContainer.styled";
import { Button, Libography } from "../../libs";
import MessageFeed from "./messages/MessageFeed";
import { BsFileEarmarkImageFill } from "react-icons/bs";
// import InputEmoji from "react-input-emoji";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";
import MessageInput from "../form/MessageInput";
import { MessageImageUpload } from "../functions/MessageImageUpload";
import MessageLink from "../form/MessageLink";
import InputEmoji from "react-input-emoji";

const ChatBoxContainer = ({
  currentUserId,
  chat,
  setCurrentChat,
  setSendMessage,
  receiveMessage,
}) => {
  const chatId = chat._id;
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [textImg, setTextImg] = useState(null);
  const [url, setUrl] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      // setMessages({ ...messages, receiveMessage });
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
    const getUserData = async () => {
      const data = await getUserById(userId);
      setUserData(data);
    };
    getUserData();
  }, [chat, currentUserId]);

  useEffect(() => {
    const getMessages = async () => {
      const data = await getUserMessages(chatId);
      setMessages(data);
      console.log("messages:", messages);
    };
    getMessages();
  }, [chatId]);

  async function handleSend() {
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
      textImg: textImg,
      url: url,
    };
    setIsLoading(true);
    try {
      const data = await addMessage(message);
      setMessages([...messages, data]);
    } catch (error) {
      console.log({ error: error.message });
      toast.error(error.message, { position: "top-center" });
    } finally {
      setIsLoading(false);
      setNewMessage("");
      setPhoto(null);
    }
    const receiverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message, receiverId });
  }
  console.log("value fot text:", newMessage);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavoir: "smooth" });
  }, [messages]);
  return (
    <StyledChatBoxContainer>
      <StyledChatBoxHeader>
        <IoArrowBack onClick={() => setCurrentChat(null)} className="svg" />
        <ChatImage src={userData?.userProfile?.url} alt="" />
        <Libography
          fontSemiBold
          fontRoboto
          text={userData?.name}
          className="text-[17px]"
        />
      </StyledChatBoxHeader>
      <MessageFeed
        scroll={scroll}
        chatId={chat._id}
        currentUserId={currentUserId}
        messages={messages}
        setMessages={setMessages}
        photo={photo}
      />
      <StyledSenderContainer>
        {photo ? (
          <img src={photo} className="w-24" alt="" />
        ) : (
          <MessageImageUpload
            photo={photo}
            setPhoto={setPhoto}
            setTextImg={setTextImg}
          />
        )}
        <MessageLink url={url} setUrl={setUrl} />

        {/* <MessageInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        /> */}
        <InputEmoji
          setValue={newMessage}
          // emitChange={(e) => setNewMessage(e.target.value)}
          onChange={(e) => setNewMessage("yes")}
          cleanOnEnter
          onEnter={handleSend}
          placeholder="Type a message"
        />

        <Button
          isCurrentBg
          text="Send"
          onClick={handleSend}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </StyledSenderContainer>
    </StyledChatBoxContainer>
  );
};

export default ChatBoxContainer;
