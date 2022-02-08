import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    favoriteJobs: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      console.log("addFavorite state", state);
      console.log("addFavorite action", action);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
