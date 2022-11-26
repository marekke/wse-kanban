import {createAction} from "@reduxjs/toolkit";
import {ModalAction, ModalActionTypes} from "./reducers";

export const modalActionShow = createAction<ModalAction>('app/modalAction/show');

export const showModalAction = (action: ModalAction) => {
    return modalActionShow(action);
}