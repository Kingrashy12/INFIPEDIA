import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";

const initialState = {
  trendingPosts: [],
  trendingVideos: [],
  tPostStatus: null,
  tPostError: null,
  tVideoStatus: null,
  tPostStatus: null,
};

export const getTrends = createAsyncThunk(
  "trend-get",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/trend/all`);
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const TrenSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrends.pending, (state, action) => {
      return { ...state, tPostStatus: "pending" };
    });
    builder.addCase(getTrends.fulfilled, (state, action) => {
      return {
        ...state,
        tPostStatus: "success",
        trendingPosts: action.payload,
      };
    });
    builder.addCase(getTrends.rejected, (state, action) => {
      return { ...state, tPostStatus: "rejected", tPostError: action.payload };
    });
  },
});

export default TrenSlice.reducer;
