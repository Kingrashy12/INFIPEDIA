import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  fetchStatus: null,
  fetchError: null,
  createStatus: null,
  createError: null,
};

export const FetchUserChats = createAsyncThunk(
  "chat/fetch-user",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/chat/find/all/${userId}`);
      return response?.data;
    } catch (error) {
      console.log(error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createChats = createAsyncThunk(
  "chat-new",
  async (senderId, receiverId) => {
    try {
      const response = await axios.post(`${BASE_URL}/chat`, {
        senderId: senderId,
        receiverId: receiverId,
      });
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log(error.response?.data);
      // return rejectWithValue(error.response?.data);
    }
  }
);

const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchUserChats.pending]: (state, action) => {
      state.fetchStatus = "pending";
    },
    [FetchUserChats.fulfilled]: (state, action) => {
      state.fetchStatus = "success";
      state.items = action.payload;
    },
    [FetchUserChats.rejected]: (state, action) => {
      state.fetchStatus = "rejected";
      state.fetchError = action.payload;
    },
    [createChats.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [createChats.fulfilled]: (state, action) => {
      state.createStatus = "success";
    },
    [createChats.rejected]: (state, action) => {
      state.createStatus = "rejected";
      state.createError = action.payload;
    },
  },
});

export default ChatSlice.reducer;
