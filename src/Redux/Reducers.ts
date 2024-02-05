import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  Cats: Array<any>;
  MyCats: Array<any>;
  Loading: boolean,
  FlagError: boolean,
}

export const initialState: StateType = {
  Cats: [],
  MyCats: [],
  Loading: false,
  FlagError: false
};


export const CatsSlice = createSlice({
  name: "StateCats",
  initialState,
  
  reducers: {

    FetchingFlag: (state) => {
        state.Loading = !state.Loading
    },

    LoadingCats: (state, action: PayloadAction<any>) => {
        state.Cats = action.payload 
    },

    AddCat: (state, action: PayloadAction<any>) => {
      state.MyCats.push(action.payload);
    },

    DeleteCat: (state, action: PayloadAction<string>) => {
      state.MyCats.forEach((el) => {
        if (el.id === action.payload) {
          console.log(el);
        }
      });
    },

    FlagError: (state) => {
        state.FlagError = true
    }
  },
});


const { actions, reducer } = CatsSlice

export const { LoadingCats, DeleteCat, AddCat, FetchingFlag, FlagError  } = actions;

export default reducer;

