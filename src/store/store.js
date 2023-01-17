import { configureStore } from "@reduxjs/toolkit";
import cart from "./module/cartSlice";
import user from "./module/userSlice";

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
