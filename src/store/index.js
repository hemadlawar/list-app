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
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});
export { store };
const { addSong, removeSong } = songsSlice.actions;
const { addMovie, removeMovie } = movieSlice.actions;
export { addSong, removeSong, addMovie, removeMovie };
