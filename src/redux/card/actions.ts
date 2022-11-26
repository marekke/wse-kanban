import {createAction} from "@reduxjs/toolkit";
import {Card} from "./reducers";

export const cardCreated = createAction<Card>('card/created');
export const cardUpdated = createAction('card/updated');
export const cardRemoved = createAction('card/removed');

export const createNewCard = (card: Card) => {
    return cardCreated(card);
}