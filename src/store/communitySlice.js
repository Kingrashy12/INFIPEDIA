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
        cname: form.cname,
        cprofile: form.cprofile,
        ccover: form.ccover,
        cdesc: form.cdesc,
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
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/community/one/${slug}`);
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
      // const updatedstate = state.lists.unshift(action.payload);
      return { ...state, lists: action.payload, createStatus: "success" };
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
  // extraReducers: {
  //   [FetchAllCommunity.pending]: (state, action) => {
  //     state.fetchStatus = "pending";
  //   },
  //   [FetchAllCommunity.fulfilled]: (state, action) => {
  //     state.fetchStatus = "success";
  //     state.lists = action.payload;
  //   },
  //   [FetchAllCommunity.rejected]: (state, action) => {
  //     state.fetchError = action.payload;
  //     state.fetchStatus = "rejected";
  //   },
  //   [CreateNewCommunity.pending]: (state, action) => {
  //     state.createStatus = "pending";
  //   },
  //   [CreateNewCommunity.fulfilled]: (state, action) => {
  //     state.createStatus = "success";
  //     // const updatedstate = state.lists.unshift(action.payload);
  //     // state.lists = updatedstate;
  //   },
  //   [CreateNewCommunity.rejected]: (state, action) => {
  //     state.createStatus = "rejected";
  //     state.createError = action.payload;
  //   },
  //   [ExploreCommunity.pending]: (state, action) => {
  //     state.exploredStatus = "pending";
  //   },
  //   [ExploreCommunity.fulfilled]: (state, action) => {
  //     state.exploredStatus = "success";
  //     state.explored = action.payload;
  //   },
  //   [ExploreCommunity.rejected]: (state, action) => {
  //     state.exploredStatus = "rejected";
  //     state.exploredError = action.payload;
  //   },
  // },
});

export default CommunitySlice.reducer;
