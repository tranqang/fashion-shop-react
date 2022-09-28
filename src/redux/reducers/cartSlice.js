const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) ?? [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    },
    updateCart: (state, action) => {
      state.find(item => item.id === action.payload.id).quantity =
        action.payload.quantity;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    increaseCart: (state, action) => {
      state.find(item => item.id === action.payload.id).quantity +=
        action.payload.quantity;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});
export const { addToCart, deleteFromCart, updateCart, increaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
