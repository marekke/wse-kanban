import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {hide} from "../modalActionSlice";
import {getModalAction} from "../selectors";

export default function AppModal() {
    const dispatch = useDispatch();
    const modalAction = useSelector(getModalAction);
    let modalView = null;

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