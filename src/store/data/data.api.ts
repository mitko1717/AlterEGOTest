import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IQueries } from "./../../models/interfaces";

export const dataApi = createApi({
  reducerPath: "posts/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getData: build.query<IPost[], IQueries>({
      query: ({ limit, start }) => ({
        url: `posts`,
        params: {
          _start: start,
          _limit: limit,
        },
      }),
      transformResponse: (response: IPost[]) => response,
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
