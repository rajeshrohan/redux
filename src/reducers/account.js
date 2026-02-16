import {
  Increment,
  Decrement,
  IncrementByAmount,
  GetUserPending,
  GetUserFullfilled,
  GetUserRejected,
} from "../actions/index";

export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case GetUserPending:
      return { ...state, pending: true };
    case GetUserFullfilled:
      return { amount: action.payload, pending: false };
    case GetUserRejected:
      return { ...state, error: action.error, pending: false };
    case Increment:
      return { amount: state.amount + 1 };
    case Decrement:
      return { amount: state.amount - 1 };
    case IncrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}
