import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../hooks/api";

export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = PostApi;
