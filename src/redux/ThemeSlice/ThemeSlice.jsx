import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false,
}

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkMode: (state,action) => {
            state.isDarkMode = action.payload ?? !state.isDarkMode;
        }
    }
})


export default ThemeSlice.reducer;

export const {setDarkMode} = ThemeSlice.actions;