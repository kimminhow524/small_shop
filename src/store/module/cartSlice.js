import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "stock",
  initialState: [],
  reducers: {
    plusCount(state, action) {
      state.find((x) => x.id === action.payload).count += 1;
    },
    minusCount(state, action) {
      state.find((x) => x.id === action.payload).count -= 1;
    },
    removeItem(state, action) {
      return state.filter((x) => x.id !== action.payload);
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
export let { plusCount, minusCount, removeItem, addItem } = cart.actions;
export default cart;
