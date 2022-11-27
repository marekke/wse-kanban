import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";

export interface List {
    id: number,
    title: string,
    cardsOrder: number[]
}

export interface INewList {
    title: string,
}

export interface IUpdateList {
    id: number,
    title: string
}

export interface ListState {
    [key: number]: List
}

const initialState: ListState = {
    1: {
        id: 1,
        title: 'Testowa 1',
        cardsOrder: []
    },
    2: {
        id: 2,
        title: 'Testowa 2',
        cardsOrder: []
    }
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        create(state, action: PayloadAction<INewList>) {
            const newID = generateIDForEntity(state);
            state[newID] = {
                id: newID,
                ...action.payload,
                cardsOrder: []
            };
        },
        update(state, action: PayloadAction<IUpdateList>) {
            state[action.payload.id].title = action.payload.title
        },
        remove(state, action: PayloadAction<number>) {
            delete state[action.payload];
        }
    }
});

export const { create, update, remove } = listSlice.actions;
export default listSlice.reducer;