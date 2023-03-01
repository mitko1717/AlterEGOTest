import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/interfaces";

interface IDataState {
  stateData: IPost[];
}

const initialState: IDataState = {
  stateData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IPost[]>) {
      state.stateData = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
