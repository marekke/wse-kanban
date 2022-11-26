import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {modalActionShow} from "./actions";

export enum ModalActionTypes {
    CardView = "CARDVIEW",
    ListForm = "LISTFORM",
}

export interface ModalAction {
    type: ModalActionTypes,
    referenceID: any,
    title: any
}

export interface AppState {
    modalAction: ModalAction | null
}

const initialState: AppState = {
    modalAction: null
};

export default createReducer<AppState>(initialState, {
    [modalActionShow.type]: (state: AppState, action: PayloadAction<ModalAction>) => {
        state.modalAction = action.payload;
    }
})