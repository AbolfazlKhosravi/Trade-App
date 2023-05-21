import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice' 
import favoritesReducer from './products/favoritesSlice'
import cartReducer from './products/cartSlice'
const store = configureStore({
    reducer: {
        products:productsReducer,
        favorites:favoritesReducer,
        cart:cartReducer
    },
})

export default store