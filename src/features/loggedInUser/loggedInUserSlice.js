import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: [],
};

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {},
});

export default loggedInUserSlice.reducer;
