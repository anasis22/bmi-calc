import { createSlice } from "@reduxjs/toolkit";

const initialState = { bmi: 0 };

export const bmiValueSlice = createSlice({
  name: "bmiCalc",
  initialState,
  reducers : {
    bmiMatch : (state , action) => {
        state.bmi = action.payload
    },
    clear : (state) =>{
      state.bmi = 0
    }
  }
});

export const {bmiMatch , clear} = bmiValueSlice.actions
export default bmiValueSlice.reducer
