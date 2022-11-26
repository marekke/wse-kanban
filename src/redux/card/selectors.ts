import {ApplicationState} from "../store";

export const getCards = (state: ApplicationState) => Object.values(state.card);
export const getCardByID = (state: ApplicationState, id: number) => state.card[id];