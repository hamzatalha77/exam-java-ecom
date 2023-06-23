import { createSlice } from '@reduxjs/toolkit'

const cartFromLocalStorage = localStorage.getItem('cart')
const initialState = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : { cartItems: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x: any) => x._id === item._id)

      if (existItem) {
        state.cartItems = state.cartItems.map((x: any) =>
          x._id === existItem._id ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }
    },
  },
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
