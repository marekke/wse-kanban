import {useDispatch} from "react-redux";
import {ModalActionTypes, show} from "./modalActionSlice";

export function useModalAction() {
    const dispatch = useDispatch();

    function showListForm() {
        dispatch(show({
            type: ModalActionTypes.ListForm,
            referenceID: null,
            title: 'Utwórz nową listę'
        }));
    }

    return {showListForm}
}