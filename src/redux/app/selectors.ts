import {ApplicationState} from "../store";

export const getModalAction = (state: ApplicationState) => state.app.modalAction;