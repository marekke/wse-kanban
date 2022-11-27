import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Card {
    id: number,
    title: string,
    content: string
}

export interface CardState {
    [key: number]: Card
}

const initialState = {
    1: {
        id: 1,
        title: "Test 1",
        content: "Test test test",
    },
    2: {
        id: 2,
        title: "Test 2",
        content: "Test test test",
    },
    3: {
        id: 3,
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
    },
})

export const { create } = cardSlice.actions
export default cardSlice.reducer