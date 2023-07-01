import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer, { loadUser } from "./store/authSlice";
import histroyReducer from "./store/histroySlice";
import PostReducer, { getAllPosts, getAllTagPost } from "./store/PostSlice";
import { PostApi } from "./store/PostsApi";
import VideosReducer, { FetcVideos } from "./store/VideosSlice";
import UsersReducer, { FetchAllUsers } from "./store/UsersSlice";
import communityReducer, { FetchAllCommunity } from "./store/communitySlice";
import { communityApi } from "./store/communityApi";
import chatReducer from "./store/chatSlice";
import TrendReducer from "./store/TrendSlice";

const store = configureStore({
  reducer: {
    credentails: authReducer,
    views: histroyReducer,
    posts: PostReducer,
    videos: VideosReducer,
    users: UsersReducer,
    community: communityReducer,
    chats: chatReducer,
    trends: TrendReducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(PostApi.middleware),
    getDefaultMiddleware().concat(communityApi.middleware)
  ),
});

store.dispatch(FetchAllCommunity());
store.dispatch(getAllTagPost());
store.dispatch(FetchAllUsers());
store.dispatch(FetcVideos());
// store.dispatch(getAllPosts());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
