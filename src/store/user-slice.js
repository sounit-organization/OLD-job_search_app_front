import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    favoriteJobs: {},
  },
  reducers: {
    addFavorite: (state, action) => {
      const newJob = action.payload;
      state.favoriteJobs[newJob.id] = newJob;
    },
    removeFavorite: (state, action) => {
      delete state.favoriteJobs[action.payload.id];
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
