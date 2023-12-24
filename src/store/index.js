import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      console.log(`action.payload = ${action.payload}`);
      state.splice(action.payload, 1); // returns correct id
    },
    removeAlll(state, action) {
      state.splice(0, 99999);
    },
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      console.log(`action.payload = ${action.payload}`);
      state.splice(action.payload, 1); // returns correct id
    },
    removeAll(state, action) {
      state.splice(0, 99999);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});
export { store };
const { addSong, removeSong, removeAlll } = songsSlice.actions;
const { addMovie, removeMovie, removeAll } = movieSlice.actions;
export { addSong, removeSong, addMovie, removeMovie, removeAll, removeAlll };
