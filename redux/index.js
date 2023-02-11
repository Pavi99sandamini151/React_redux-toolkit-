const redux = require('redux')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'fisrt redux action'
    }
}

function butIceCream () {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}

// {previousState, action} => newState
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        };
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        };
        default: return state;
    }
}

// const rooReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// })

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(butIceCream())
store.dispatch(butIceCream())
unsubscribe()