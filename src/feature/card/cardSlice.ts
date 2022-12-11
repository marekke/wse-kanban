import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {listActions} from "../list";
import {generateIDForEntity} from "../../utils/IDGeneratator";
import {exampleCardState, exampleUserState} from "../../app/exampleData";
import {IUserState} from "../user";

export interface Card {
    id: number,
    listID: number,
    title: string,
    content: string
    users: number[],
}

interface INewCard {
    listID: number,
    title: string,
    content: string,
    users: number[],
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

const initialState: CardState = {};

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
        },
        userAssignedToCard (state, action: PayloadAction<{cardID: number, userID: number}>) {
            state[action.payload.cardID].users.push(action.payload.userID);
        },
        userRemovedFromCard (state, action: PayloadAction<{cardID: number, userID: number}>) {
            const users = state[action.payload.cardID].users;

            if (users.length === 1) {
                return;
            }

            state[action.payload.cardID].users = users.filter(u => u !== action.payload.userID);
        },

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
            .addCase("app/load_example_data", (state: CardState) => {
                return exampleCardState;
            })
            .addCase("app/clear_all_data", (state: CardState) => {
                return initialState;
            })
    }
})

export const moveCard = (cardID: number, targetListID: number) => {
    return cardSlice.actions.cardMoved({
        cardID,
        targetListID
    })
}

export const assignUserToCard = (cardID: number, userID: number) => {
    return cardSlice.actions.userAssignedToCard({
        userID,
        cardID
    });
}

export const removeUserFromCard = (cardID: number, userID: number) => {
    return cardSlice.actions.userRemovedFromCard({
        userID,
        cardID
    });
}

export const { create, removeMultiple, update, remove } = cardSlice.actions
export default cardSlice.reducer