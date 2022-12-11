import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cardReducer, CardState} from "../feature/card";
import {listReducer, ListState} from "../feature/list";
import {userReducer, IUserState} from "../feature/user";

export interface ApplicationState {
    user: IUserState;
    card: CardState;
    list: ListState;
}

const combinedReducers = combineReducers({
    user: userReducer,
    card: cardReducer,
    list: listReducer,
});

const rootReducer = (state: any, action: any) => {
    return combinedReducers(state, action);
}

const STATE_NAME = 'KANBAN';

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem(STATE_NAME);
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

function saveToLocalStorage(state: RootState) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem(STATE_NAME, serialisedState);
    } catch (e) {
        console.warn(e);
    }
}


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: loadFromLocalStorage(),
});
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
