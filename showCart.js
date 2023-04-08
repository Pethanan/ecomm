import { createSlice } from "@reduxjs/toolkit";

const initialShowCartState = { showCart: false };

const showCartSlice = createSlice({
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

export default showCartSlice.reducer;

export const showCartActions = showCartSlice.actions;
