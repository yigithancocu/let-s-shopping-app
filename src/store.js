import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    filter: filterSlice,
  },
});

export default store;
