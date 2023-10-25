import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./actions/storeSlice";

const store = configureStore({
  reducer: {
    storeSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
