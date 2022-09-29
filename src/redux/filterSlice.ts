import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "cart",
  initialState: {
    filter: "",
  },
  reducers: {
    addfilter: (state, action) => {
      state.filter = action.payload;
    },
    reset: (state) => {
      state.filter = "";
    },
  },
});
export const { addfilter, reset } = filterSlice.actions;
export default filterSlice.reducer;
