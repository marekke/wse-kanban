import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {cardCreated} from "./actions";

export interface Card {
    id: number,
    title: string,
    content: string
}

export interface CardState {
    [key: number]: Card
}

const initialState: CardState = {
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
};

export default createReducer<CardState>(initialState, {
    [cardCreated.type]: (state: CardState, action: PayloadAction<Card>) => {
        state[action.payload.id] = action.payload;
    }
})