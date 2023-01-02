import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import marvelDatabaseAPI from "../marvelAPI/marvelDatabaseAPI";
import { PUBLIC_KEY, PRIVATE_KEY } from "../marvelAPI/marvelDatabaseAPIKey";
import md5 from "md5";

const ts = Number(Date.now());

const marvelHash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

export const fetchAsyncCharacters = createAsyncThunk(
  "marvel/fetchAsyncCharacters",
  async () => {
    const response = await marvelDatabaseAPI.get(
      `public/characters?ts=${ts}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);
export const fetchAsyncCharacter = createAsyncThunk(
  "marvel/fetchAsyncCharacter",
  async ({ charactersID }) => {
    const response = await marvelDatabaseAPI.get(
      `public/characters/${charactersID}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);
export const fetchAsyncComics = createAsyncThunk(
  "marvel/fetchAsyncComics",
  async () => {
    const response = await marvelDatabaseAPI.get(
      `public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);
export const fetchAsyncComic = createAsyncThunk(
  "marvel/fetchAsyncComic",
  async ({ comicsID }) => {
    const response = await marvelDatabaseAPI.get(
      `public/comics/${comicsID}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${marvelHash}`,
      { crossdomain: true }
    );
    return response.data;
  }
);

const initialState = {
  characters: [],
  selectedCharacter: {},
  comics: [],
  selectedComic: {},
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
    /*Fetch Comics start*/
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
    /*Fetch Comics with ID start*/
    [fetchAsyncComic.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncComic.fulfilled]: (state, { payload }) => {
      return { ...state, selectedComic: payload.data.results };
    },
    [fetchAsyncComic.rejected]: () => {
      console.log("Rejected!");
    },
    /*end*/
  },
});

export const {} = marvelSlice.actions;

export const getAllCharacters = (state) => state.marvel.characters;
export const getSelectedCharacter = (state) => state.marvel.selectedCharacter;
export const getAllComics = (state) => state.marvel.comics;
export const getSelectedComic = (state) => state.marvel.selectedComic;

export default marvelSlice.reducer;
