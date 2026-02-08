// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const Apis = createApi({
  reducerPath: "Apis",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    addAllProducts: builder.mutation({
      query: ({ products, totalPrice }) => ({
        url: "/cart",
        method: "POST",
        body: { products, totalPrice },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useAddAllProductsMutation } = Apis;
