import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../hooks/api";

export const communityApi = createApi({
  reducerPath: "communityApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  endpoints: (builder) => ({
    getAllCommunity: builder.query({
      query: () => "community",
    }),
  }),
});

export const { useGetAllCommunityQuery } = communityApi;
