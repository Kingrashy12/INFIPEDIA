import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChatWrapper } from "../../styles/pages/chat.styled";
import {
  ChatBox,
  ChatBoxConatiner,
  ComingSoon,
  Conversation,
  SideNavLinks,
} from "../../components";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchUserChats } from "../../store/chatSlice";
// import axios from "axios";
// import { BASE_URL } from "../../hooks/api";
// import { io } from "socket.io-client";
// import ConversationItem from "../../components/chats/ConversationItem";

const Chat = () => {
  useEffect(() => {
    document.title = "Messages - Infipedia";
  });
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.credentails);
  // const [chats, setChats] = useState([]);
  // const [currentChat, setCurrentChat] = useState(null);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  // const [sendMessage, setSendMessage] = useState(null);
  // const [receiveMessage, setReceiveMessage] = useState(null);
  // const socket = useRef();

  // useEffect(() => {
  //   socket.current = io(`http://localhost:8800`);
  //   socket.current.emit("new-user-add", user._id);
  //   socket.current.on("get-users", (users) => {
  //     setOnlineUsers(users);
  //   });
  // }, [user]);

  // Send message to socket server
  // useEffect(() => {
  //   if (sendMessage !== null) {
  //     socket.current.emit("send-message", sendMessage);
  //   }
  // }, [sendMessage]);

  // Receive message from socket server
  // useEffect(() => {
  //   socket.current.on("receive-message", (data) => {
  //     setReceiveMessage(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const getChats = async () => {
  //     const response = await axios.get(
  //       `${BASE_URL}/chat/find/all/${user?._id}`
  //     );
  //     setChats(response?.data);
  //     console.log("Userchat:", chats);
  //   };
  //   getChats();
  // }, [user]);

  // const checkOnlineStatus = (chat) => {
  //   const chatMenber = chat.members.find((member) => member !== user._id);
  //   const online = onlineUsers.find((user) => user.userId === chatMenber);
  //   return online ? true : false;
  // };

  return (
    <ChatWrapper>
      <SideNavLinks />
      {/* <Conversation
        // online={checkOnlineStatus}
        chats={chats}
        currentUser={user}
        setCurrentChat={setCurrentChat}
        hide={currentChat}
      /> */}
      <ComingSoon />
      {/* <ChatBox
        chat={currentChat}
        currentUserId={user?._id}
        setCurrentChat={setCurrentChat}
        setSendMessage={setSendMessage}
        receiveMessage={receiveMessage}
      /> */}
    </ChatWrapper>
  );
};

export default Chat;
