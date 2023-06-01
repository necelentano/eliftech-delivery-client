import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopsApi = createApi({
  reducerPath: "shopsApi",
  tagTypes: ["Shops"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (build) => ({
    getAllShops: build.query({
      query: () => `/shops`,
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "Shops", id })),
              { type: "Shops", id: "LIST" },
            ]
          : [{ type: "Shops", id: "LIST" }];
      },
    }),
    getOneShop: build.query({
      query: (slug) => `/shops/${slug}`,
    }),
  }),
});

export const { useGetAllShopsQuery, useGetOneShopQuery } = shopsApi;
