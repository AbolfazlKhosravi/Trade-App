import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice' 
import favoritesReducer from './products/favoritesSlice'

const store = configureStore({
    reducer: {
        products:productsReducer,
        favorites:favoritesReducer
    },
})

export default store