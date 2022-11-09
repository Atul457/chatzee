import { configureStore } from "@reduxjs/toolkit";
import { chat } from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    chat,
  },
});

export { store };
