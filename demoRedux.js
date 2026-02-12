import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];

function reducer(state={amount:1}, action){
    if(action.type === 'increment'){
        return {amount : state.amount +1};  // immutable
    }
    return state;
}

setInterval(()=>{
    store.dispatch({type : 'increment'});
}, 3000);

// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
// })

/*
npm i redux 
npm i redux-logger 

principles : 
1. Global store 
2. states should be immutable
3. reducer should be pure fn, no side effects. 
*/



