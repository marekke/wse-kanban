import {useDispatch} from "react-redux";
import {ModalActionTypes, show} from "./modalActionSlice";

export function useModalAction() {
    const dispatch = useDispatch();

    function showCreateNewListModal() {
        dispatch(show({
            type: ModalActionTypes.ListCreate,
            referenceID: null,
            title: 'Utwórz nową listę'
        }));
    }

    function showUpdateListModal(listID: number) {
        dispatch(show({
            type: ModalActionTypes.ListUpdate,
            referenceID: listID,
            title: 'Edytuj listę'
        }));
    }

    return {showCreateNewListModal, showUpdateListModal}
}