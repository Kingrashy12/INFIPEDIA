import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  savedPosts: localStorage.getItem("savedPosts")
    ? JSON.parse(localStorage.getItem("savedPosts"))
    : [],
  userPosts: [],
  userTagPost: [],
  tagPosts: [],
  followingPost: [],
  fetchStatus: null,
  fetchError: null,
  commentStatus: null,
  commentError: null,
  upostStatus: null,
  upostError: null,
  deleteStatus: null,
  deleteError: null,
  postStatus: null,
  postError: null,
  fetchTagStatus: null,
  fetchTagError: null,
  tagStatus: null,
  tagError: null,
  untagStatus: null,
  untagError: null,
  followingPostStatus: null,
  followingPostError: null,
  utagStatus: null,
  utagError: null,
};

export const getAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const createNewPost = createAsyncThunk(
  "posts/new",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts/new`, {
        body: data.desc,
        userId: data.userId,
        postImg: data.photo,
      });

      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const CommentsOnPost = createAsyncThunk(
  "posts/comments",
  async (text, { rejectWithValue }) => {
    try {
      await axios.patch(`${BASE_URL}/posts/comment`, {
        text: text.body,
        postId: text.postId,
      });
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/like",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/posts/like`, {
        userId: data.auth,
        postId: data.post,
      });
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/get-user-own",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${username}`);
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deleteOne",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/posts/delete`, {
        postId,
      });
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllTagPost = createAsyncThunk(
  "posts-find-tag",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/tag`);
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const TagPosts = createAsyncThunk(
  "posts-tag-one",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/tag/new`, {
        postId: data.postId,
        userId: data.userId,
      });
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const UnTagPosts = createAsyncThunk(
  "post-untag-one",
  async (tagId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/tag/${tagId}`);
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const FetchFollowingPost = createAsyncThunk(
  "posts-fetch-following",
  async (currentUserId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/posts/following/${currentUserId}`
      );
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const FetchUserTagPosts = createAsyncThunk(
  "posts-fetch-tag/user",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/tag/${userId}/all`);
      return response?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost: (state, action) => {
      state.savedPosts.push(action.payload);
      localStorage.setItem("savedPosts", JSON.stringify(state.savedPosts));
    },
    unSavePost: (state, action) => {
      const nextSaveItems = state.savedPosts.filter(
        (post) => post._id !== action.payload._id
      );
      state.savedPosts = nextSaveItems;
      localStorage.setItem("savedPosts", JSON.stringify(state.savedPosts));
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllPosts.pending, (state, action) => {
  //     return { ...state, fetchStatus: "pending" };
  //   });
  //   builder.addCase(getAllPosts.fulfilled, (state, action) => {
  //     return { ...state, fetchStatus: "sucess", items: action.payload };
  //   });
  //   builder.addCase(getAllPosts.rejected, (state, action) => {
  //     return { ...state, fetchStatus: "rejected", fetchError: action.payload };
  //   });
  //   builder.addCase(createNewPost.pending, (state, action) => {
  //     return { ...state, postStatus: "pending" };
  //   });
  //   builder.addCase(createNewPost.fulfilled, (state, action) => {
  //     toast.success("Post shared", { position: "top-center" });
  //     return {
  //       ...state,
  //       postStatus: "success",
  //       items: state.items.unshift(action.payload),
  //     };
  //   });
  //   builder.addCase(createNewPost.rejected, (state, action) => {
  //     return { ...state, postStatus: "rejected", post: action.payload };
  //   });
  //   builder.addCase(CommentsOnPost.pending, (state, action) => {
  //     return { ...state, commentStatus: "pending" };
  //   });
  //   builder.addCase(CommentsOnPost.fulfilled, (state, action) => {
  //     return { ...state, commentStatus: "success" };
  //   });
  //   builder.addCase(CommentsOnPost.rejected, (state, action) => {
  //     return {
  //       ...state,
  //       commentStatus: "success",
  //       commentError: action.payload,
  //     };
  //   });
  //   builder.addCase(getUserPost.pending, (state, action) => {
  //     return { ...state, upostStatus: "pending" };
  //   });
  //   builder.addCase(getUserPost.fulfilled, (state, action) => {
  //     return { ...state, upostStatus: "success", userPosts: action.payload };
  //   });
  //   builder.addCase(getUserPost.rejected, (state, action) => {
  //     return { ...state, upostStatus: "rejected", upostError: action.payload };
  //   });
  //   builder.addCase(likePost.fulfilled, (state, action) => {
  //     toast.success(`You liked ${action.payload.name} Post`);
  //   });
  //   builder.addCase(deletePost.pending, (state, action) => {
  //     return { ...state, deleteStatus: "pending" };
  //   });
  //   builder.addCase(deletePost.fulfilled, (state, action) => {
  //     toast.success("Post delete", { position: "top-center" });
  //     const updatedPost = state.userPosts.filter(
  //       (post) => post._id !== action.payload._id
  //     );
  //     return { ...state, deleteStatus: "success", userPosts: updatedPost };
  //   });
  //   builder.addCase(deletePost.rejected, (state, action) => {
  //     return {
  //       ...state,
  //       deleteStatus: "rejected",
  //       deleteError: action.payload,
  //     };
  //   });
  // },
  extraReducers: {
    [getAllPosts.pending]: (state, action) => {
      state.fetchStatus = "pending";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.fetchStatus = "success";
      state.items = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.fetchStatus = "rejected";
      state.fetchError = action.payload;
    },
    [createNewPost.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [createNewPost.fulfilled]: (state, action) => {
      state.postStatus = "success";
      const updatedPost = state.items.unshift(action.payload);
      state.item = updatedPost;
    },
    [createNewPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
    },
    [CommentsOnPost.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [CommentsOnPost.fulfilled]: (state, action) => {
      state.commentStatus = "success";
      toast.success("Comment added", { position: "top-center" });
    },
    [CommentsOnPost.rejected]: (state, action) => {
      state.commentStatus = "rejected";
      state.commentError = action.payload;
    },
    [getUserPost.pending]: (state, action) => {
      state.upostStatus = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.upostStatus = "success";
      state.userPosts = action.payload;
    },
    [getUserPost.rejected]: (state, action) => {
      state.upostStatus = "rejected";
      state.upostError = action.payload;
    },
    [deletePost.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.deleteStatus = "success";
      toast.success("Post deleted", { position: "top-center" });
      const updatedPost = state.userPosts.filter(
        (post) => post._id !== action.payload._id
      );
      const updatedItem = state.items.filter(
        (post) => post._id !== action.payload._id
      );
      state.userPosts = updatedPost;
      state.items = updatedItem;
    },
    [deletePost.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
      state.deleteError = action.payload;
    },
    [likePost.fulfilled]: (state, action) => {
      toast.success(`Success`, {
        postion: "top-center",
      });
    },
    [getAllTagPost.pending]: (state, action) => {
      state.fetchTagStatus = "pending";
    },
    [getAllTagPost.fulfilled]: (state, action) => {
      state.fetchTagStatus = "success";
      state.tagPosts = action.payload;
    },
    [getAllTagPost.rejected]: (state, action) => {
      state.fetchTagStatus = "rejected";
      state.fetchTagError = action.payload;
    },
    [TagPosts.pending]: (state, action) => {
      state.tagStatus = "pending";
    },
    [TagPosts.fulfilled]: (state, action) => {
      state.tagStatus = "success";
      state.tagPosts.unshift(action.payload);
    },
    [TagPosts.rejected]: (state, action) => {
      state.tagStatus = "rejected";
      state.tagError = action.payload;
    },
    [UnTagPosts.pending]: (state, action) => {
      state.untagStatus = "pending";
    },
    [UnTagPosts.fulfilled]: (state, action) => {
      state.untagStatus = "success";
      const updatedTagPost = state.tagPosts.filter(
        (tag) => tag._id !== action.payload._id
      );
      state.tagPosts = updatedTagPost;
    },
    [UnTagPosts.rejected]: (state, action) => {
      state.untagStatus = "rejected";
      state.untagError = action.payload;
    },
    [FetchFollowingPost.pending]: (state, action) => {
      state.followingPostStatus = "pending";
    },
    [FetchFollowingPost.fulfilled]: (state, action) => {
      state.followingPostStatus = "success";
      state.followingPost = action.payload;
    },
    [FetchFollowingPost.rejected]: (state, action) => {
      state.followingPostStatus = "rejected";
      state.followingPostError = action.payload;
    },
    [FetchUserTagPosts.pending]: (state, action) => {
      state.utagStatus = "pending";
    },
    [FetchUserTagPosts.fulfilled]: (state, action) => {
      state.utagStatus = "success";
      state.userTagPost = action.payload;
    },
    [FetchUserTagPosts.rejected]: (state, action) => {
      state.utagError = action.payload;
      state.utagStatus = "rejected";
    },
  },
});

export default PostSlice.reducer;

export const { savePost, unSavePost } = PostSlice.actions;
