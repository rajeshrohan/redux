import { IncrementBonus, IncrementByAmount } from "../actions";

export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case IncrementByAmount:
      return { points: state.points + 1 };
    case IncrementBonus:
      return { points: state.points + Math.floor(action.payload / 100) };
    default:
      return state;
  }
}
