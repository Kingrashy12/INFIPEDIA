import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../hooks/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("Token"),
  name: "",
  email: "",
  username: "",
  _id: "",
  bio: localStorage.getItem("Bio")
    ? JSON.parse(localStorage.getItem("Bio"))
    : "",
  FetcStatus: null,
  FetchError: null,
  userProfile: localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile"))
    : "",

  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  updatedStatus: null,
  updatedError: null,
  userLoaded: false,
  profileEditStatus: null,
  profileEditError: null,
  coverEditStatus: null,
  coverEditError: null,
  deleteStatus: null,
  deleteError: null,
  emailupdatedStatus: null,
  emailupdatedError: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/register`, {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
      });
      localStorage.setItem("Token", token.data);
      console.log(token.data);
      return token.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/login`, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("Token", token.data);
      console.log(token.data);
      return token.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdateUser = createAsyncThunk(
  "auth/edit",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/${user.id}/edit`, {
        userId: user.id,
        name: user.name,
        username: user.username,
        bio: user.bio,
      });
      toast.success(`${user.name} Profile Updated`, { position: "top-center" });
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdatedUserProfile = createAsyncThunk(
  "auth/update-profile",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/edit/profile`, {
        userProfile: user.userProfile,
        userId: user.userId,
      });
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdatedUserCover = createAsyncThunk(
  "auth/update-cover",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/edit/cover`, {
        userCover: user.userCover,
        userId: user.userId,
      });
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserAccount = createAsyncThunk(
  "auth-delete",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/delete/${userId}`);
      return response?.data;
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
      console.log({ error: error.message });
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdateEmail = createAsyncThunk(
  "auth-update/email",
  async (data, userId) => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/${userId}/edit`, {
        email: data.email,
        userId: data.userId,
      });
      return response?.data;
    } catch (error) {
      toast.error(error, { position: "top-center" });
      console.log({ error: error.message });
      // return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          savedItem: state.saved,
          name: user.name,
          email: user.email,
          _id: user._id,
          username: user.username,
          userProfile: user.userProfile,
          userLoaded: true,
        };
      }
    },
    logOutUser: (state, action) => {
      localStorage.removeItem("Token");
      localStorage.removeItem("histroy");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        username: "",
        _id: "",
        userProfile: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        toast.success(`Welcome to Infipedia ${user.name}`, {
          position: "top-center",
        });
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          username: user.username,

          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        toast.success(`Welcome back ${user.name}`, { position: "top-center" });
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          username: user.username,
          userProfile: user.userProfile,

          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
    builder.addCase(UpdateUser.pending, (state, action) => {
      return { ...state, updatedStatus: "pending" };
    });
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      localStorage.setItem("Bio", JSON.stringify(action.payload.bio));
      return {
        ...state,
        updatedStatus: "success",
        // bio: action.payload.bio
      };
    });
    builder.addCase(UpdateUser.rejected, (state, action) => {
      return {
        ...state,
        updatedStatus: "rejected",
        updatedError: action.payload,
      };
    });
    builder.addCase(UpdatedUserProfile.pending, (state, action) => {
      return { ...state, profileEditStatus: "pending" };
    });
    builder.addCase(UpdatedUserProfile.fulfilled, (state, action) => {
      localStorage.setItem(
        "userProfile",
        JSON.stringify(action.payload?.userProfile)
      );
      toast.success("Profile updated", { position: "top-center" });
      return {
        ...state,
        profileEditStatus: "success",
        userProfile: localStorage.getItem("userProfile"),
      };
    });
    builder.addCase(UpdatedUserProfile.rejected, (state, action) => {
      return {
        ...state,
        profileEditStatus: "rejected",
        profileEditError: action.payload,
      };
    });
    builder.addCase(UpdatedUserCover.pending, (state, action) => {
      return { ...state, coverEditStatus: "pending" };
    });
    builder.addCase(UpdatedUserCover.fulfilled, (state, action) => {
      toast.success("Cover photo updated", { position: "top-center" });
      return { ...state, coverEditStatus: "success" };
    });
    builder.addCase(UpdatedUserCover.rejected, (state, action) => {
      return {
        ...state,
        coverEditStatus: "rejected",
        coverEditError: action.payload,
      };
    });
    builder.addCase(deleteUserAccount.pending, (state, action) => {
      return { ...state, deleteStatus: "pending" };
    });
    builder.addCase(deleteUserAccount.fulfilled, (state, action) => {
      localStorage.removeItem("Token");
      localStorage.removeItem("histroy");

      return {
        ...state,
        deleteStatus: "success",
        _id: "",
        name: "",
        email: "",
        username: "",
        userProfile: "",
        userLoaded: false,
        token: "",
      };
    });
    builder.addCase(deleteUserAccount.rejected, (state, action) => {
      return {
        ...state,
        deleteStatus: "rejected",
        deleteError: action.payload,
      };
    });
    builder.addCase(UpdateEmail.pending, (state, action) => {
      return { ...state, emailupdatedStatus: "pending" };
    });
    builder.addCase(UpdateEmail.fulfilled, (state, action) => {
      toast.success("Email updated", { position: "top-center" });
      // state.email = action.meta.arg.email;
      return {
        ...state,
        emailupdatedStatus: "success",
        email: action.meta.arg.email,
      };
    });
    builder.addCase(UpdateEmail.rejected, (state, action) => {
      return {
        ...state,
        emailupdatedStatus: "rejected",
        emailupdatedError: action.payload,
      };
    });
  },
});

export const { loadUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
