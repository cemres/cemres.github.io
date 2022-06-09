import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: { value: [] },
  reducers: {
    addItemToCart: (state, action) => {
      let newCartArray = state.value;
      newCartArray.push(action.payload);
      state.value = newCartArray;
    },

    removeItemFromCard: (state, action) => {
      state.value = state.value.filter((data) => data.id !== action.payload.id);
    },
  },
});

export const { addItemToCart, removeItemFromCard } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
