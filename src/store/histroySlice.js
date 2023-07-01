import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: localStorage.getItem("histroy")
    ? JSON.parse(localStorage.getItem("histroy"))
    : [],
  total: 0,
};

const histroySliec = createSlice({
  name: "search-histroy",
  initialState,
  reducers: {
    addToHistry: (state, action) => {
      state.savedItems.push(action.payload);
      localStorage.setItem("histroy", JSON.stringify(state.savedItems));
    },
    addTotal: (state, action) => {
      state.total = +1;
    },
  },
});

export default histroySliec.reducer;

export const { addToHistry, addTotal } = histroySliec.actions;
