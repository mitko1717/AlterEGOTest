import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataState, IPost, IQueries } from "../../models/interfaces";

const initialState: IDataState = {
  stateData: [],
  start: 0,
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

export const getData = createAsyncThunk(
  "data",
  async ({ start, limit }: IQueries) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
      ).then((data) => data.json());

      return res;
    } catch (e) {
      console.error(e);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IPost[]>) {
      state.stateData = action.payload;
    },
    setStart(state) {
      state.start += 5;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        if (state.stateData.length === 0) state.stateData = action.payload;

        if (!state.stateData.find((obj) => obj.id === action.payload[0].id)) {
          state.stateData = state.stateData.concat(action.payload);
        }
        state.isLoading = false;
      }
    );
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
