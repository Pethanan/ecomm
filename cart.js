import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state, action) {
      state.showCart = true;
    },
    closeCart(state, action) {
      state.showCart = false;
    },
    addItem(state, action) {
      const item = action.payload;
      const itemToUpdateIndex = state.items.findIndex(
        (cartItem) => item.id === cartItem.id
      );

      const itemToUpdate = state.items[itemToUpdateIndex];
      let updatedCartItems;

      if (itemToUpdate) {
        const upatedItem = {
          ...itemToUpdate,
          amount: +itemToUpdate.amount + 1,
        };

        state.items[itemToUpdateIndex] = upatedItem;
        state.totalAmount = state.totalAmount + item.price;
      } else {
        const newItem = {
          ...item,
          amount: 1,
        };

        console.log(`1 ${newItem.title} added to the cart!`);
        state.items = [...state.items, newItem];
        state.totalAmount = state.totalAmount + item.price;
      }
    },

    removeItem(state, action) {
      const item = action.payload;
      const itemToUpdateIndex = state.items.findIndex(
        (cartItem) => item.id === cartItem.id
      );

      const itemToUpdate = state.items[itemToUpdateIndex];
      let updatedCartItems;

      if (itemToUpdate.amount > 1) {
        const upatedItem = {
          ...itemToUpdate,
          amount: +itemToUpdate.amount - 1,
        };

        state.items[itemToUpdateIndex] = upatedItem;
        state.totalAmount = state.totalAmount - item.price;
      } else {
        state.items = state.items.filter((cartItem) => item.id !== cartItem.id);
        state.totalAmount = state.totalAmount - item.price;
      }
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
