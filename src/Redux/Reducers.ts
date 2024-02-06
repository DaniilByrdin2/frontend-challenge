import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface StateType {
  Cats: any[];
  MyCats: any[];
  Loading: boolean,
}

export const initialState: StateType | never[] = {
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

    LoadingCats: (state, { payload }: PayloadAction<any[]>) => {
        state.Cats.push(...payload)   
    },

    AddCat: (state, { payload }: PayloadAction<string>) => {
      const selectCat = state.Cats.find( e  => e.id === payload  )

      selectCat.like = true
      state.MyCats.push(selectCat);
    },

    DeleteCat: (state, { payload }: PayloadAction<string>) => {
      const selectCat = state.Cats.find( e => e.id === payload ) 
      selectCat.like = false
      state.MyCats = state.MyCats.filter( e => e.id !== selectCat.id )
    },
  },
});


const { actions, reducer } = CatsSlice

export const { LoadingCats, DeleteCat, AddCat, FetchingFlag } = actions;

export default reducer;

