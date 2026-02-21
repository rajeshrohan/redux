import axios from "axios";

// constants : action Name
export const Increment = "account/increment";
export const Decrement = "account/decrement";
export const IncrementByAmount = "account/incrementByAmount";
export const IncrementBonus = "bonus/increment";

export const GetUserPending = "account/getUser/pending";
export const GetUserFullfilled = "account/getUser/fullfilled";
export const GetUserRejected = "account/getUser/rejected";

// Action creators
export function getUserAccount(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(getUserAccountPending(true));
      const { data } = await axios.get(`http://localhost:8080/account/${id}`);
      dispatch(getUserAccountFullfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
}
export function getUserAccountPending() {
  return { type: GetUserPending, pending: true };
}
export function getUserAccountFullfilled(value) {
  return { type: GetUserFullfilled, payload: value };
}
export function getUserAccountRejected(value) {
  return { type: GetUserRejected, error: value };
}
export function increment() {
  return { type: Increment };
}
export function decrement() {
  return { type: Decrement };
}
export function incrementByAmount(value) {
  return { type: IncrementByAmount, payload: value };
}
export function incrementBonus(value) {
  return { type: IncrementBonus, payload: value };
}
