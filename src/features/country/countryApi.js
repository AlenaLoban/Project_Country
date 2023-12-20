import { baseApi } from "../../core/store/api";
export const countriesApi = baseApi.injectEndpoints({
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
  overrideExisting: false,
});

export const {
  useGetCountriesQuery,
  useGetCountryQuery,
  useGetBorderCountriesQuery,
} = countriesApi;
