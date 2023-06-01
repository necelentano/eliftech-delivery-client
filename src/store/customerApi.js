import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    createCustomer: build.mutation({
      query: (body) => {
        return {
          url: `/customer`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useCreateCustomerMutation } = customerApi;
