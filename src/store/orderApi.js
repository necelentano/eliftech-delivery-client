import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    tagTypes: ["Orders"],
  }),
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (body) => {
        return {
          url: `/orders`,
          method: "POST",
          body,
        };
      },
    }),
    getAllOrdersByCustomer: build.mutation({
      query: (body) => ({
        url: `/orders/customer`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrdersByCustomerMutation } =
  orderApi;
