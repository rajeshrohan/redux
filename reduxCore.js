import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// Constants
const Increment = "account/increment";
const Decrement = "account/decrement";
const IncrementByAmount = "account/incrementByAmount";
const IncrementBonus = "bonus/increment";

const GetUserPending = "account/getUser/pending";
const GetUserFullfilled = "account/getUser/fullfilled";
const GetUserRejected = "account/getUser/rejected";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk),
);

const history = [];

function accountReducer(state = { amount: 0 }, action) {
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

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case IncrementByAmount:
      return { points: state.points + 1 };
    case IncrementBonus:
      return { points: state.points + Math.floor(action.payload / 100) };
    default:
      return state;
  }
}

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Action creators
function getUserAccount(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(getUserAccountPending(true));
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(getUserAccountFullfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
}
function getUserAccountPending() {
  return { type: GetUserPending, pending: true };
}
function getUserAccountFullfilled(value) {
  return { type: GetUserFullfilled, payload: value };
}
function getUserAccountRejected(value) {
  return { type: GetUserRejected, error: value };
}
function increment() {
  return { type: Increment };
}
function decrement() {
  return { type: Decrement };
}
function incrementByAmount(value) {
  return { type: IncrementByAmount, payload: value };
}
function incrementBonus(value) {
  return { type: IncrementBonus, payload: value };
}

setTimeout(() => {
   store.dispatch(getUserAccount(1));
  // store.dispatch(incrementBonus(200));
}, 2000);
