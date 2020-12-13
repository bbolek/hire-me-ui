import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: "123123xzczxc",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    putToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = "";
    },
  },
});

export const { putToken, deleteToken } = authSlice.actions;

export default authSlice.reducer;
