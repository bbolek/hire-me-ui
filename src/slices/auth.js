import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    deleteToken: (state) => {
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, deleteToken } = authSlice.actions;

export default authSlice.reducer;
