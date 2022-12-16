import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import marvelDatabaseAPI from "../marvelAPI/marvelDatabaseAPI";
import { APIKey } from "../marvelAPI/marvelDatabaseAPIKey";

const marvelSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {},
  extraReducers: {
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
