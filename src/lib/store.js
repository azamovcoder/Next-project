import { api } from "./api";
import cartSlice from "./features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlist/wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      wishlist: wishlistSlice,
      cart: cartSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
