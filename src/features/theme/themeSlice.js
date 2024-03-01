import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeDifine: (state, action) => {
      switch (action.payload) {
        case "light":
          state.themeMode ="light";
          break;
        case "dark":
          state.themeMode = "dark";
          break;
        default:
          state.themeMode = "light";
      }
    },
  },
});

export const { themeDifine } = themeSlice.actions;

export default themeSlice.reducer;
