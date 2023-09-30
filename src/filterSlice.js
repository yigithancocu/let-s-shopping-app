import { createSlice } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const initialState = {
  searchQuery: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterBySearch(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterBySearch } = filterSlice.actions;
