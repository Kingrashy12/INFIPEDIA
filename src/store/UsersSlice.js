import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";
import { toast } from "react-toastify";

const initialState = {
  list: [],
  requestedUser: [],
  singleStatus: null,
  singleError: null,
  fetchStatus: null,
  fetchError: null,
  followStatus: null,
  followError: null,
};

export const FetchAllUsers = createAsyncThunk(
  "users/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const FetchSingleUser = createAsyncThunk(
  "users/getOne",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${username}`);
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const FollowUser = createAsyncThunk(
  "users/follow",
  async (followId, userId) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/users/follow/${followId}`,
        {
          userId: userId,
        }
      );
      toast.success("Done", { position: "top-center" });
      return response?.data;
    } catch (error) {
      console.log({ error: error.message });
      toast.error(error.message, { position: "top-center" });
      // return rejectWithValue(error.response.data);
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchAllUsers.pending, (state, action) => {
      return { ...state, fetchStatus: "pending" };
    });
    builder.addCase(FetchAllUsers.fulfilled, (state, action) => {
      return { ...state, fetchStatus: "success", list: action.payload };
    });
    builder.addCase(FetchAllUsers.rejected, (state, action) => {
      return { ...state, fetchStatus: "rejected", fetchError: action.payload };
    });
    builder.addCase(FetchSingleUser.pending, (state, action) => {
      return { ...state, singleStatus: "pending" };
    });
    builder.addCase(FetchSingleUser.fulfilled, (state, action) => {
      return {
        ...state,
        requestedUser: action.payload,
        singleStatus: "success",
      };
    });
    builder.addCase(FetchSingleUser.rejected, (state, action) => {
      return {
        ...state,
        singleStatus: "rejected",
        singleError: action.payload,
      };
    });
    builder.addCase(FollowUser.pending, (state, action) => {
      return { ...state, followStatus: "pending" };
    });
    builder.addCase(FollowUser.fulfilled, (state, action) => {
      return { ...state, followStatus: "success" };
    });
    builder.addCase(FollowUser.rejected, (state, action) => {
      return {
        ...state,
        followStatus: "rejected",
        followError: action.payload,
      };
    });
  },
});

export default UsersSlice.reducer;
