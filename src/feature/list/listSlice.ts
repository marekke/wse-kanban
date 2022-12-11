import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";
import {listActions} from "./index";
import {CardState} from "../card";
import {exampleListState} from "../../app/exampleData";

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

const initialState: ListState = {}

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
    },
    extraReducers: (builder) => {
        builder
            .addCase("app/load_example_data", (state: ListState) => {
                return exampleListState;
            })
            .addCase("app/clear_all_data", (state: ListState) => {
                return initialState;
            })
    }
});

export const { create, update, remove } = listSlice.actions;
export default listSlice.reducer;