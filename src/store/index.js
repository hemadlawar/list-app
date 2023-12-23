import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {},
    removeSong(state, action) {
      // Placeholder logic for removing a song
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

// Dispatch some actions to test the reducers

console.log(store.getState());
