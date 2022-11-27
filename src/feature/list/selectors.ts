import {ApplicationState} from "../../app/store";

export const getLists = (state: ApplicationState) => Object.values(state.list);
export const getListByID = (state: ApplicationState, id: number) => state.list[id];
