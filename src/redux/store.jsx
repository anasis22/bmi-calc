import { configureStore } from "@reduxjs/toolkit";
import getBmiValReducer from "./bmiValSlice"

export const store = configureStore({
    reducer : {
        getBmiVal : getBmiValReducer
    }
})