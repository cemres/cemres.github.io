import { createSlice } from "@reduxjs/toolkit";
import menuData from "../data/menuData";

export const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState: { value: menuData },
  reducers: {},
});

export const { filterMenuByCategory } = menuItemsSlice.actions;
export default menuItemsSlice.reducer;
