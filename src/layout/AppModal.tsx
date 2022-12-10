import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

interface AppModalProps {
    children: any
    title: string
}

export default function AppModal(props: AppModalProps) {
    const navigate = useNavigate();

    return (
        <Modal show={true} onHide={() => navigate('/')}>
            <Modal.Header closeButton>
                <Modal.Title className="h6">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>

        </Modal>
    );
}