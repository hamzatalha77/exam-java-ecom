import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './slices/cartSlice'
import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
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
