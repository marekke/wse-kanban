import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";

export interface List {
    id: number,
    title: string,
    cardsID: number[]
}

export interface INewList {
    title: string,
    cardsID: number[]
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
        cardsID: [1,2,3]
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
                ...action.payload
            };
        },
        update(state, action: PayloadAction<IUpdateList>) {
            state[action.payload.id].title = action.payload.title
        }
    }
});

export const { create, update } = listSlice.actions;
export default listSlice.reducer;