import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {hide, ModalActionTypes} from "../modalActionSlice";
import {getModalAction} from "../selectors";
import {CardCreate, CardView} from "../../card";
import {ListCreate, ListUpdate} from "../../list";

export default function AppModal() {
    const dispatch = useDispatch();
    const modalAction = useSelector(getModalAction);
    let modalView = null;

    if (modalAction?.type === ModalActionTypes.CardView) {
        modalView = <CardView cardID={modalAction.referenceID}/>;
    }

    if (modalAction?.type === ModalActionTypes.ListCreate) {
        modalView = <ListCreate/>;
    }

    if (modalAction?.type === ModalActionTypes.ListUpdate) {
        modalView = <ListUpdate listID={modalAction.referenceID}/>;
    }

    if (modalAction?.type === ModalActionTypes.CardCreate) {
        modalView = <CardCreate  listID={modalAction.referenceID} />;
    }

    return (
        <Modal show={modalAction.type !== null} onHide={() => dispatch(hide())}>
            <Modal.Header closeButton>
                <Modal.Title className="h6">
                    {modalAction?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalView}
            </Modal.Body>

        </Modal>
    );
}