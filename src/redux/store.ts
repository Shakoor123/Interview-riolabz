import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./filterSlice";

export default configureStore({
  reducer: {
    filter: FilterReducer,
  },
});
