import { createSlice } from "@reduxjs/toolkit";
const initialShowCartState = { showCart: false };

const showcartSlice = createSlice({
  name: "cart",
  initialState: initialShowCartState,
  reducers: {
    showCart(state, action) {
      state.showCart = true;
    },
    closeCart(state, action) {
      state.showCart = false;
    },
  },
});

export default showcartSlice.reducer;

export const showcartActions = showcartSlice.actions;
