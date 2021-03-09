import {combineReducers, createStore} from 'redux';
import {usersReducer} from './usersReducer';


let rootReducer = combineReducers({
    users: usersReducer
})
export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)


// @ts-ignore
window.store = store;