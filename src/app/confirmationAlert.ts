import {confirmAlert} from "react-confirm-alert";

export default function confirmationAlert (message: string, onClickYes: () => void, onClickNo?: () => void) {
    confirmAlert({
        title: 'Potwierdzenie.',
        message,
        buttons: [
            {
                label: 'Tak',
                onClick: onClickYes
            },
            {
                label: 'Nie',
                onClick: onClickNo
            }
        ]
    });
}