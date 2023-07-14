import { configureStore } from "@reduxjs/toolkit";
import loggedInUserSlice from "../features/loggedInUser/loggedInUserSlice";

const store = configureStore({
  reducer: {
    loggedInUser: loggedInUserSlice,
  },
});

export default store;
