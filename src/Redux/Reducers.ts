import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  Cats: Array<any>;
  MyCats: Array<any>;
  Loading: boolean,
}

export const initialState: StateType = {
  Cats: [],
  MyCats: [],
  Loading: false,
};


export const CatsSlice = createSlice({
  name: "StateCats",
  initialState,
  
  reducers: {

    FetchingFlag: (state) => {
        state.Loading = !state.Loading
    },

    LoadingCats: (state, action: PayloadAction<any>) => {
        state.Cats.push(...action.payload)   
    },

    AddCat: (state, action: PayloadAction<any>) => {
      const selectCat = state.Cats.find( e => e.id === action.payload )
      selectCat.like = true
      state.MyCats.push(selectCat);
    },

    DeleteCat: (state, action: PayloadAction<string>) => {
      const selectCat = state.Cats.find( e => e.id === action.payload ) 
      selectCat.like = false
      state.MyCats = state.MyCats.filter( e => e.id !== selectCat.id )
    },
  },
});


const { actions, reducer } = CatsSlice

export const { LoadingCats, DeleteCat, AddCat, FetchingFlag  } = actions;

export default reducer;

