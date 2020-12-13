import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  access_token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
      state.isAuthenticated = true;
    },
    deleteToken: (state) => {
      state.access_token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, deleteToken } = authSlice.actions;

export default authSlice.reducer;
