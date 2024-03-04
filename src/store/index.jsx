import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";
import cartReducer from "./slices/CartSlices";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    cart: cartReducer,
  },
});

export default store;
