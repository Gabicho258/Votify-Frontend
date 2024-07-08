import { configureStore } from "@reduxjs/toolkit";

import { votifyApi } from "./votify.api.ts";

export const store = configureStore({
  reducer: {
    [votifyApi.reducerPath]: votifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(votifyApi.middleware),
});