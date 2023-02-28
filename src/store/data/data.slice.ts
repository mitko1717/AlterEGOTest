import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../models/interfaces";

interface GithubState {
//   openedArticle: IArticle | null;
}

const initialState: GithubState = {
//   openedArticle: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // setArticle(state, action: PayloadAction<IArticle>) {
    //   state.openedArticle = action.payload;
    // },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
