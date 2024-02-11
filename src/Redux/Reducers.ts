import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface StateType {
  Cats: any[];
  MyCats: any[];
  Loading: boolean,
  Error: boolean
}

export const initialState: StateType | never[] = {
  Cats: [],
  MyCats: [],
  Loading: false,
  Error: false
};


export const CatsSlice = createSlice({
  name: "StateCats",
  initialState,
  
  reducers: {

    FetchingError: (state) => {
      state.Error = true
    },

    FetchingFlag: (state) => {
        state.Loading = !state.Loading
    },

    LoadingCats: (state, { payload }: PayloadAction<any[]>) => {
        state.Cats.push(...payload)   
    },

    FavoriteCat: ( state, { payload }: PayloadAction<string> ) => {

      const selectCat = state.Cats.find( e  => e.id === payload  )

      if ( selectCat && selectCat.like ) {
        selectCat.like = false
        state.MyCats = state.MyCats.filter( e => e.id !== selectCat.id )

      } else {
        selectCat.like = true
        state.MyCats.push(selectCat);      
      }

    }
  },
});


const { actions, reducer } = CatsSlice

export const { LoadingCats, FavoriteCat, FetchingFlag, FetchingError } = actions;

export default reducer;

