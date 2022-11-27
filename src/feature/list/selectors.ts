import {ApplicationState} from "../../app/store";

export const getLists = (state: ApplicationState) => Object.values(state.list)