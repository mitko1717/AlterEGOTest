import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "./../../models/interfaces";

export const dataApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spaceflightnewsapi.net/v3/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getData: build.query<IArticle[], number>({
      query: (limit: number = 100) => ({
        url: `articles?`,
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: IArticle[]) => response,
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
