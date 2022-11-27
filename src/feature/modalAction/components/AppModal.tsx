import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {hide, ModalActionTypes} from "../modalActionSlice";
import {getModalAction} from "../selectors";
import {CardView} from "../../card";
import {ListForm} from "../../list";

export default function AppModal() {
    const dispatch = useDispatch();
    const modalAction = useSelector(getModalAction);
    let modalView = null;

    if (modalAction?.type === ModalActionTypes.CardView) {
        modalView = <CardView cardID={modalAction.referenceID}/>;
    }

    if (modalAction?.type === ModalActionTypes.ListForm) {
        modalView = <ListForm />;
    }

    const handleClose = () => dispatch(hide());

    return (
        <>
            <Modal show={modalAction.type !== null} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="h6">
                        {modalAction?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalView}
                </Modal.Body>

            </Modal>
        </>
    );
}