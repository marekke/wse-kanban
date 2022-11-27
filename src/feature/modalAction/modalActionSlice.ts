import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum ModalActionTypes {
    CardView = "CARDVIEW",
    ListCreate = "LISTCREATE",
    ListUpdate = "LISTUPDATE",
}

export interface IModalAction {
    type: null | ModalActionTypes
    referenceID: any,
    title: any
}

const initialState: IModalAction = {
    type: null,
    referenceID: null,
    title: null
};

const modalActionSlice = createSlice({
    name: 'modalAction',
    initialState,
    reducers: {
        show(state, action: PayloadAction<IModalAction>) {
            return action.payload;
        },
        hide() {
            return initialState;
        },
    }
});

export const showModalAction = (type: ModalActionTypes, referenceID?: any, title?: string) => {
    return modalActionSlice.actions.show({
        type,
        referenceID,
        title
    });
}

export const {show, hide} = modalActionSlice.actions;
export default  modalActionSlice.reducer;