import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

// * logged out user start

export const logoutUser = () => {
  return (dispatch) => {
    // Perform any additional logout logic if needed
    dispatch(loggedInUserSlice.actions.clearLoggedInUser());
  };
};

// * logged out user end

// * logged in user start
export const fetchUser = createAsyncThunk(
  "loggedInUser/fetchLoggedInUser",
  async () => {
    const token = localStorage.getItem("token");
    const url = "https://super-ray-shrug.cyclic.cloud/getUser";
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
  reducers: {
    clearLoggedInUser: (state) => {
      state.loggedInUser = [];
    },
  },
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
// * logged in user end

export const { clearLoggedInUser } = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;
