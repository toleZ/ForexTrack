import { configureStore } from "@reduxjs/toolkit";
import { foregeinSlice } from "./slices/foregein";

export const store = configureStore({
  reducer: {
    foregein: foregeinSlice.reducer,
  },
});
