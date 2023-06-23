import { createSlice } from '@reduxjs/toolkit'

const cartFromLocalStorage = localStorage.getItem('cart')
const initialState = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : { cartItems: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})
export default cartSlice.reducer
