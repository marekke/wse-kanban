import {ApplicationState} from "../../app/store";
import {IModalAction} from "./modalActionSlice";

export const getModalAction = (state: ApplicationState): IModalAction => state.modalAction;