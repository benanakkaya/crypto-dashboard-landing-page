import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: true,
}

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkMode: (state,action) => {
            state.isDarkMode = action.payload ?? !state.isDarkMode;
            localStorage.setItem("cryptoDarkMode", JSON.stringify(state.isDarkMode)); 
        }
    }
})


export default ThemeSlice.reducer;

export const {setDarkMode} = ThemeSlice.actions;