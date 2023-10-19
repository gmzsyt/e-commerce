// CartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Each item will be { product: {}, quantity: 0 }
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        // If the product is in the cart, update its quantity
        state.items[existingItemIndex].quantity += quantity;
        state.items[existingItemIndex].totalQuantity= quantity;
      } else {
        // If the item is not in the cart, add it as a new item
        state.items.push({ product, quantity });
        state.totalQuantity += quantity;
      }
      // Update total product quantity
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      // Update total products price
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.quantity * item.product.price;
      }, 0);

    },
    increaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.items.find(item => item.product.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.items.find(item => item.product.id === productId);

      if (existingItem && existingItem.quantity >= 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.product.price;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
