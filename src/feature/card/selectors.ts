import {ApplicationState} from "../../app/store";

export const getCards = (state: ApplicationState) => Object.values(state.card);
export const getCardByID = (state: ApplicationState, id: number) => state.card[id];
export const getCardsByListID = (state: ApplicationState, listID: number) => {
    const cardsID = state.list[listID].cardsID;
    console.log(cardsID);
    return getCards(state).filter(card => cardsID.includes(card.id));
}