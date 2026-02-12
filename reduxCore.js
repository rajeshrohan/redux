import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Axios from 'axios';
import axios from 'axios';

// Constants 
const Increment = 'increment';
const Decrement = 'decrement';
const IncrementByAmount = 'incrementByAmount';
const InitializeUser = 'initializeUser';

const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];

function reducer(state = { amount: 1 }, action) {
	switch (action.type) {
		case InitializeUser:
			return { amount: action.payload };
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

store.subscribe(() => {
	history.push(store.getState());
	console.log(history);
});

// Action creators :
async function initializeUser() {
	const {data} = await(axios.get('http://localhost:3000/accounts/1'));
	// const data = getUser();
	return { type: InitializeUser , payload : data.amount}
}
function increment() {
	return { type: Increment }
}
function decrement() {
	return { type: Decrement }
}
function incrementByAmount(value) {
	return { type: IncrementByAmount, payload: value }
}

setInterval(() => {
	store.dispatch(initializeUser());
}, 2000);




