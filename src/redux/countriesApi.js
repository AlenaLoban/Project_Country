// import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const allCountryUrl = `all?fields=name,capital,flags,population,region`;

// export const countriesApi = createApi({
//    reducerPath: 'couintriesApi',
//    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
//    endpoints: (build) => ({
//       getCountries: build.query({
//          query: (searchValue, selectedOption) => selectedOption? (`alpha?codes=${selectedOption.join(',')}`) : allCountryUrl
//       }),
//       getCountry: build.query({
//          query: (name) => `name/${name}`
//       })
//    })
// })

// export const { useGetCountriesQuery, useGetCountryQuery } = countriesApi;

