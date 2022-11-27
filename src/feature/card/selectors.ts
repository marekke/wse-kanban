import {ApplicationState} from "../../app/store";
import {Card} from "./cardSlice";

export const getCards = (state: ApplicationState) => Object.values(state.card);
export const getCardByID = (state: ApplicationState, id: number) => state.card[id];
export const getCardsByListID = (state: ApplicationState, listID: number) => {
    return getCards(state).filter((card: Card) => card.listID === listID);
}