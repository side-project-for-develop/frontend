import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  token: string;
}

const initialState: UserState = {
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "userSlicer",
  initialState,
  reducers: {
    __saveEmail: function (state, { type, payload }) {
      state.email = payload.email;
    },
    __saveToken: function (state, { type, payload }) {
      state.token = payload.token;
    },
  },
});

export const { __saveEmail, __saveToken } = userSlice.actions;

export default userSlice.reducer;
