import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  userVideos: [],
  fetchStatus: null,
  fetchErro: null,
  shareStatus: null,
  shareError: null,
  uvideoStatus: null,
  uvideoError: null,
};

export const FetcVideos = createAsyncThunk(
  "videos/fetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/videos`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue({ error: error.message });
    }
  }
);

export const ShareVideo = createAsyncThunk(
  "videos/share",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/videos/new`, {
        userId: data.userId,
        desc: data.desc,
        video: data.video,
      });
      toast.success("Video shared", { position: "top-center" });
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log({ error: error.message });
      return rejectWithValue({ error: error.message });
    }
  }
);

export const getUserVideos = createAsyncThunk(
  "videos/get-user-own",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/videos/${username}/get`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue({ error: error.message });
    }
  }
);

const VideoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetcVideos.pending, (state, action) => {
      return { ...state, fetchStatus: "pending" };
    });
    builder.addCase(FetcVideos.fulfilled, (state, action) => {
      return { ...state, fetchStatus: "success", items: action.payload };
    });
    builder.addCase(FetcVideos.rejected, (state, action) => {
      return { ...state, fetchStatus: "rejected", fetchErro: action.payload };
    });
    builder.addCase(ShareVideo.pending, (state, action) => {
      return { ...state, shareStatus: "pending" };
    });
    builder.addCase(ShareVideo.fulfilled, (state, action) => {
      return { ...state, shareStatus: "success" };
    });
    builder.addCase(ShareVideo.rejected, (state, action) => {
      return { ...state, shareError: action.payload, shareStatus: "rejected" };
    });
    builder.addCase(getUserVideos.pending, (state, action) => {
      return { ...state, uvideoStatus: "pending" };
    });
    builder.addCase(getUserVideos.fulfilled, (state, action) => {
      return { ...state, uvideoStatus: "success", userVideos: action.payload };
    });
    builder.addCase(getUserVideos.rejected, (state, action) => {
      return {
        ...state,
        uvideoStatus: "rejected",
        uvideoError: action.payload,
      };
    });
  },
});

export default VideoSlice.reducer;
