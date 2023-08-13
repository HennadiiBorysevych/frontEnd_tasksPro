import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        selectedTheme: 'Dark',
    },
    reducers: {
        setTheme: (state, action) => {
            state.selectedTheme = action.payload;
        }
    }

});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;