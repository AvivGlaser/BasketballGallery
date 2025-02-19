import { configureStore } from "@reduxjs/toolkit";
import updateArrayReducer from "./Features/UpdateArray/updateArraySlice";

export const store = configureStore({
  reducer: {
    updateArray: updateArrayReducer,
  },
});
