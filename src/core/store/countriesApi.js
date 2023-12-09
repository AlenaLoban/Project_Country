import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => `all?fields=name,capital,flags,population,region`,
    }),
    getCountry: builder.query({
      query: (name) => `name/${name}`,
    }),
    getBorderCountries: builder.query({
      query: (borders) => `alpha?codes=${borders}`,
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryQuery,
  useGetBorderCountriesQuery,
} = countriesApi;
