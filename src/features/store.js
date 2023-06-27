import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice' 
import favoritesReducer from './products/favoritesSlice'
import cartReducer from './products/cartSlice'
import coursesSlice from './products/coursesSlice'
import dailyAnalysisSlice from './products/dailyAnalysisSlice'
import  darkModeSlice  from './Attributes/darkMode'
import usersSlice from './users/usersSlice'
const store = configureStore({
    reducer: {
        products:productsReducer,
        favorites:favoritesReducer,
        cart:cartReducer,
        courses:coursesSlice,
        dailyAnalysis:dailyAnalysisSlice,
        darkMode:darkModeSlice,
        users:usersSlice
    },
})

export default store