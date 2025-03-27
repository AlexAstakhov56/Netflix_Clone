import { createSlice } from "@reduxjs/toolkit";

const getInitState = () => {
  const state = localStorage.getItem("auth");
  return state ? JSON.parse(state) : { username: "", isAdmin: false };
};

const initialState = {
  auth: getInitState(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.auth.username = action.payload;
      localStorage.setItem("auth", JSON.stringify(state.auth));
    },
    setIsAdmin(state, action) {
      state.auth.isAdmin = action.payload;
      localStorage.setItem("auth", JSON.stringify(state.auth));
    },
  },
});

export const { setUsername, setIsAdmin } = authSlice.actions;

export default authSlice.reducer;
