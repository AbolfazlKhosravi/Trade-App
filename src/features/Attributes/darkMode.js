import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    change: (state) => {
  
      state.darkMode = !state.darkMode
    }
  },
})

export const { change } = darkModeSlice.actions

export default darkModeSlice.reducer