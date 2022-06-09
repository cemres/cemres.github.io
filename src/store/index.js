import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import menuItems from "./menuItems";
import shoppingCart from "./shoppingCart";

const reducer = combineReducers({
  menuItems,
  shoppingCart,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
