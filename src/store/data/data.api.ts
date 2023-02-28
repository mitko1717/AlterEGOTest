import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "./../../models/interfaces";

export const dataApi = createApi({
  reducerPath: "posts/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getData: build.query<IPost[], number>({
      query: (limit: number = 10) => ({
        url: `posts`,
        params: {
          _start: 0,
          _limit: limit,
        },
      }),
      transformResponse: (response: IPost[]) => response,
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
