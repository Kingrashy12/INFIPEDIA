import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";

const initialState = {
  lists: [],
  explored: [],
  fetchStatus: null,
  fetchError: null,
  createStatus: null,
  createError: null,
  exploredStatus: null,
  exploredError: null,
};

export const FetchAllCommunity = createAsyncThunk(
  "community/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/community`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const CreateNewCommunity = createAsyncThunk(
  "community/new",
  async (form, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/community/new`, {
        userId: form.userId,
        uUsername: form.uUsername,
        uname: form.uname,
        uProfile: form.uProfile,
        cname: form.cname,
        cProfile: form.cProfile,
        cCover: form.cCover,
        cCat: form.cCat,
      });
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const ExploreCommunity = createAsyncThunk(
  "community/explore",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/community/${id}`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

const CommunitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchAllCommunity.pending, (state, action) => {
      return { ...state, fetchStatus: "pending" };
    });
    builder.addCase(FetchAllCommunity.fulfilled, (state, action) => {
      return { ...state, fetchStatus: "success", lists: action.payload };
    });
    builder.addCase(FetchAllCommunity.rejected, (state, action) => {
      return { ...state, fetchStatus: "rejected", fetchError: action.payload };
    });
    builder.addCase(CreateNewCommunity.pending, (state, action) => {
      return { ...state, createStatus: "pending" };
    });
    builder.addCase(CreateNewCommunity.fulfilled, (state, action) => {
      return { ...state, createStatus: "success" };
    });
    builder.addCase(CreateNewCommunity.rejected, (state, action) => {
      return {
        ...state,
        createStatus: "rejected",
        createError: action.payload,
      };
    });
    builder.addCase(ExploreCommunity.pending, (state, action) => {
      return { ...state, exploredStatus: "pending" };
    });
    builder.addCase(ExploreCommunity.fulfilled, (state, action) => {
      return { ...state, exploredStatus: "success", explored: action.payload };
    });
    builder.addCase(ExploreCommunity.rejected, (state, action) => {
      return {
        ...state,
        exploredStatus: "rejected",
        exploredError: action.payload,
      };
    });
  },
});

export default CommunitySlice.reducer;
