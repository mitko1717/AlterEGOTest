import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IDataState, IPost, IQueries } from "../../models/interfaces";

const isUserLogined =
  typeof window !== "undefined" && localStorage.getItem("isLogined") !== null
    ? JSON.parse(localStorage.getItem("isLogined") || "")
    : null;

// const loadedData =
// typeof window !== "undefined" && localStorage.getItem("loadedData") !== null
//   ? JSON.parse(localStorage.getItem("loadedData") || "")
//   : null;

//   const startCount =
//   typeof window !== "undefined" && localStorage.getItem("startCount") !== null
//     ? JSON.parse(localStorage.getItem("startCount") || "")
//     : null;

const initialState: IDataState = {
  // stateData: loadedData !== null ? loadedData : [],
  stateData: [],
  // start: startCount !== null ? startCount : 0,
  start: 0,
  isLoading: true,
  isLogined: isUserLogined !== null ? JSON.parse(isUserLogined) : false,
  lngs: {
    en: { nativeName: "English" },
    uk: { nativeName: "Ukrainian" },
  },
  database: [
    {
      login: "admin",
      password: "12345",
    },
  ],
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
      // localStorage.setItem("startCount", JSON.stringify(state.start));
    },
    setIsLoginedTrue(state) {
      state.isLogined = true;
      localStorage.setItem("isLogined", "true");
    },
    setIsLoginedFalse(state) {
      state.isLogined = false;
      localStorage.setItem("isLogined", "false");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        if (state.stateData.length === 0) state.stateData = action.payload;

        let existingObj = state.stateData.find(
          (obj) => obj.id === action.payload[0].id
        );

        if (!existingObj) {
          state.stateData = state.stateData.concat(action.payload);
          // localStorage.setItem("loadedData", JSON.stringify(state.stateData.concat(action.payload)));
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
