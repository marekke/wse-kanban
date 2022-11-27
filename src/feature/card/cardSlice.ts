import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {listActions} from "../list";

export interface Card {
    id: number,
    listID: number,
    title: string,
    content: string
}

export interface CardState {
    [key: number]: Card
}

const initialState = {
    1: {
        id: 1,
        listID: 1,
        title: "Test 1",
        content: "Test test test",
    },
    2: {
        id: 2,
        listID: 1,
        title: "Test 2",
        content: "Test test test",
    },
    3: {
        id: 3,
        listID: 2,
        title: "Test 3",
        content: "Test test test",
    }
} as CardState

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        create(state, action: PayloadAction<Card>) {
            state[action.payload.id] = action.payload;
        },
        removeMultiple(state, action: PayloadAction<number[]>) {
            action.payload.forEach(id => delete state[id]);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listActions.remove, (state : CardState, action : PayloadAction<number>) => {
                for (const id in state) {
                    if (state[id].listID === action.payload) {
                        delete state[id];
                    }
                }
            })
    }
})

export const { create, removeMultiple } = cardSlice.actions
export default cardSlice.reducer