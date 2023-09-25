import { createSlice } from "@reduxjs/toolkit";

let language: "ar" | "en" = "ar";

if (localStorage.getItem('language') === 'en') {
    language = "en"
}

interface LanguageState {
    language: "ar" | "en"
}



const initialState: LanguageState = {
    language
}

export const LanguageSlice = createSlice({
    initialState,
    name: 'language',
    reducers: {
        setLanguage: (state, { payload }) => {
            state.language = payload;
            localStorage.setItem('lan', payload)
        }
    }
})

export const { setLanguage } = LanguageSlice.actions

