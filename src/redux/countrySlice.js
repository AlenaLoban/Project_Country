import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";


export const fetchContries = createAsyncThunk(
   'countries/fetchContries',
   async function(_, {rejectWithValue}){
      try{
         const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
         if (!res.ok){
            throw new Error ('server Error')
         }
         const data = await res.json();
         return data;
      }
      catch(error){
         return rejectWithValue(error.message)
      }
   }

)
export const fetchContryByName = createAsyncThunk(
   'countries/fetchContryByName',
   async function(name, {rejectWithValue}){
      try{
         const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
         if (!res.ok){
            throw new Error ('server Error')
         }
         const data = await res.json();
         return data;
      }
      catch(error){
         return rejectWithValue(error.message)
      }
   }

)
export const fetchContryBorders = createAsyncThunk(
   'countries/fetchContryBorders',
   async function(borders, {rejectWithValue}){
      try{
         const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=`+ borders.join(','))
         if (!res.ok){
            throw new Error ('server Error')
         }
         const data = await res.json();
         return data;
      }
      catch(error){
         return rejectWithValue(error.message)
      }
   }

)
const setErorr =(state, action)=> {
   state.status='rejected';
   state.error = action.payload;
}


export const countrySlice = createSlice({
   name: 'countries',
   initialState : {
      contries: [],
      contry : [],
      choiseCountries: [],
      neighbours: [],
      error : null,
      isLoading: null,
   
   },
   reducers: {
      filterCountry(state,action){
         state.choiseCountries = [...state.contries]
         if (action.payload.regionValue){
            state.choiseCountries =  state.choiseCountries.filter(country => country.region.includes(action.payload.regionValue))
         }
         if (action.payload.searchValue){
            state.choiseCountries =  state.choiseCountries.filter(country => country.name.common.toLowerCase().includes(action.payload.searchValue.toLowerCase()))
         }      
     
      },
      
   },
   extraReducers: (builder)=> {
      builder
         .addCase(fetchContries.pending, (state) => { state.isLoading = true}
         )
         .addCase(fetchContries.fulfilled, (state,action) => { 
               state.isLoading = false;
               state.contries = action.payload;
            }
         )
         .addCase(fetchContries.rejected, setErorr)
         .addCase(fetchContryByName.pending, (state) => { state.isLoading = true}
         )
         .addCase(fetchContryByName.fulfilled, (state,action) => { 
               state.isLoading = false;
               state.contry = action.payload;

            }
         )
         .addCase(fetchContryByName.rejected, setErorr)
         .addCase(fetchContryBorders.pending, (state) => { state.isLoading = true}
         )
         .addCase(fetchContryBorders.fulfilled, (state,action) => { 
            state.isLoading = false;
            state.neighbours = action.payload;
            state.neighbours = state.neighbours.map(item => item.name.common)
            }
         )

   }
})


export const {filterCountry } = countrySlice.actions;
export const countryReducer = countrySlice.reducer;