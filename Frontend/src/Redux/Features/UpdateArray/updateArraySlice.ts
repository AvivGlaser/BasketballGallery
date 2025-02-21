import { createSlice } from "@reduxjs/toolkit";
import teamsData from "../../../Components/Pages/TeamsPage/TeamsData";

const initialState: any = {
  dataArray: teamsData,
};

export const updatedArraySlice = createSlice({
  name: "updateArray",
  initialState,
  reducers: {
    updateArray: (state, action) => {
      state.dataArray = action.payload; // Update the array in the state
    },
    resetArray: (state) => {
      state.dataArray = initialState.dataArray;
    },
  },
});

export const { updateArray, resetArray } = updatedArraySlice.actions;
export default updatedArraySlice.reducer;
