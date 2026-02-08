import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/slice/cartSlice";
import { Apis } from "./services/all-services";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [Apis.reducerPath]: Apis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apis.middleware),
});
