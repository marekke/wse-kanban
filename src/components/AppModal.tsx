import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalActionTypes} from "../redux/app/reducers";
import CardView from "./card/CardView";
import {useSelector} from "react-redux";
import {getModalAction} from "../redux/app/selectors";

export default function AppModal() {
    const [show, setShow] = useState(false);
    const modalAction = useSelector(getModalAction);
    let modalView = null;

    useEffect(() => {
        setShow(modalAction !== null)
    },[modalAction])

    if (modalAction?.type === ModalActionTypes.CardView) {
        modalView = <CardView cardID={modalAction.referenceID}/>;
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
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