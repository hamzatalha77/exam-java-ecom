import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import cartSliceReducer from './cartSlice'
const rootReducer = combineReducers({
  cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
  devTools: true,
})
export default store
