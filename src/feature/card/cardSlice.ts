import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {listActions} from "../list";
import {generateIDForEntity} from "../../utils/IDGeneratator";

export interface Card {
    id: number,
    listID: number,
    title: string,
    content: string
}

interface INewCard {
    listID: number,
    title: string,
    content: string
}

interface IUpdateCard {
    id: number,
    title: string,
    content: string
}

interface ICardMove {
    cardID: number,
    targetListID: number,
}

export interface CardState {
    [key: number]: Card
}

const initialState = {
    1: {
        id: 1,
        listID: 1,
        title: "Test 1 test test test",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    2: {
        id: 2,
        listID: 1,
        title: "Test 1 test test test",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    3: {
        id: 3,
        listID: 2,
        title: "Test 1 test test test",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    }
} as CardState

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        create(state, action: PayloadAction<INewCard>) {
            const newID = generateIDForEntity(state);
            state[newID] = {
                id: newID,
                ...action.payload
            };
        },
        update(state, action: PayloadAction<IUpdateCard>) {
            state[action.payload.id].title = action.payload.title;
            state[action.payload.id].content = action.payload.content;
        },
        remove(state, action: PayloadAction<number>) {
            delete state[action.payload];
        },
        removeMultiple(state, action: PayloadAction<number[]>) {
            action.payload.forEach(id => delete state[id]);
        },
        cardMoved (state, action: PayloadAction<ICardMove>) {
            state[action.payload.cardID].listID = action.payload.targetListID;
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

export const moveCard = (cardID: number, targetListID: number) => {
    return cardSlice.actions.cardMoved({
        cardID,
        targetListID
    })
}

export const { create, removeMultiple, update, remove } = cardSlice.actions
export default cardSlice.reducer