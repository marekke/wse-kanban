import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import cardReducer, {CardState} from "./card/reducers";
import appReducer, {AppState} from "./app/reducers";

export interface ApplicationState {
    card: CardState;
    app: AppState;
}

const combinedReducers = combineReducers({
    card: cardReducer,
    app: appReducer,
});

const rootReducer = (state: any, action: any) => {
    // if (action.type === 'epp/exampleData/generated') {
    //     return combinedReducers(undefined, action);
    // }
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
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
