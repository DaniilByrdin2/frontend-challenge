import { configureStore } from '@reduxjs/toolkit'
import CatsReducer from './Reducers'

export const store = configureStore({
  reducer: CatsReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch