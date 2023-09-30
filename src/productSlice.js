import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const produtcSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    remove(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    increase(state, action) {
      const item = state.list.find((item) => item.id === action.payload);
      item.quantity = item.quantity + 1;
      item.totalPrice = item.price * item.quantity;
    },
    descrease(state, action) {
      const item = state.list.find((item) => item.id === action.payload);
      item.quantity = item.quantity - 1;
      item.totalPrice = item.price * item.quantity;
      if (item.quantity === 0) produtcSlice.caseReducers.remove(state, action);
    },
  },
});

export const getTotalListQuantity = (state) =>
  state.product.list.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.product.list.find((item) => item.id === id)?.quantity ?? 0;
export const { add, remove, increase, descrease } = produtcSlice.actions;
export default produtcSlice.reducer;
