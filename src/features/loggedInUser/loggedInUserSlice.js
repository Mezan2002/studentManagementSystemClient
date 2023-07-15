import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const fetchUser = createAsyncThunk(
  "loggedInUser/fetchLoggedInUser",
  async () => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:3000/getUser";
    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const userData = await response.json();
    return userData;
  }
);

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loggedInUser = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default loggedInUserSlice.reducer;
