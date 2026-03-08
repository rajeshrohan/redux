import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 10,
};

export const accountSlice = createSlice({
  name: "account", // action name  ex: action/type
  initialState,
  reducers: {
    // reducer logic with mutating way, immer support.
    increment: (state) => {
      state.amount += 1; // immer library support
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;

// named export     : action creators
// default export   : reducer
