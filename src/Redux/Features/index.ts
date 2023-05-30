import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

export const rootReducer = combineReducers({
  user: UserSlice,
});
