import { configureStore } from "@reduxjs/toolkit";
import loggedInUserSlice from "../features/loggedInUser/loggedInUserSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    loggedInUser: loggedInUserSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
