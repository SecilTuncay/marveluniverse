import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import marvelDatabaseAPI from "../marvelAPI/marvelDatabaseAPI";
import { PUBLIC_KEY, PRIVATE_KEY } from "../marvelAPI/marvelDatabaseAPIKey";
import md5 from "md5";

const ts = Number(Date.now());

const marvelHash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

export const fetchAsyncCharacters = createAsyncThunk(
  "movies/fetchAsyncCharacters",
  async () => {
    const response = await marvelDatabaseAPI.get(
      `public/characters?ts=${ts}&orderBy=name&limit=30&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);
export const fetchAsyncCharacter = createAsyncThunk(
  "movies/fetchAsyncCharacter",
  async ({ id }) => {
    const response = await marvelDatabaseAPI.get(
      `public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);
export const fetchAsyncComics = createAsyncThunk(
  "movies/fetchAsyncComics",
  async () => {
    const response = await marvelDatabaseAPI.get(
      `public/series?ts=${ts}&limit=10&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);

const initialState = {
  characters: [],
  selectedCharacter: {},
  comics: [],
};
const marvelSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {},
  extraReducers: {
    /*Fetch Characters start*/
    [fetchAsyncCharacters.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncCharacters.fulfilled]: (state, { payload }) => {
      return { ...state, characters: payload.data.results };
    },
    [fetchAsyncCharacters.rejected]: () => {
      console.log("Rejected!");
    },
    /*Fetch Characters start*/
    [fetchAsyncComics.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncComics.fulfilled]: (state, { payload }) => {
      return { ...state, comics: payload.data.results };
    },
    [fetchAsyncComics.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
    /*Fetch Character with ID start*/
    [fetchAsyncCharacter.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncCharacter.fulfilled]: (state, { payload }) => {
      return { ...state, selectedCharacter: payload.data.results };
    },
    [fetchAsyncCharacter.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/

    /*Fetch All Movies start*/
    /*[fetchAsyncMovies.pending]: (state) => {
      console.log("Pending");
      return { ...state, isLoading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, isLoading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },*/
    /*end*/
  },
});

export const {} = marvelSlice.actions;

export const getAllCharacters = (state) => state.marvel.characters;
export const getSelectedCharacter = (state) => state.marvel.selectedCharacter;
export const getAllComics = (state) => state.marvel.comics;

export default marvelSlice.reducer;
