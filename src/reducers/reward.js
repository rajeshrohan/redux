import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = {
  points: 15,
};

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    });
});

export default rewardReducer;
// builder fn is special fn , acts like a switch case.
// creating custom reducer fn and action creaters not by slices.
