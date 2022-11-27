import {useDispatch} from "react-redux";
import {ModalActionTypes, show} from "../feature/modalAction";

export default function AppLayoutNavbar() {
    const dispatch = useDispatch();

    function createNewListButtonHandler() {
        dispatch(show({
            type: ModalActionTypes.ListForm,
            referenceID: null,
            title: 'Utwórz nową listę'
        }));
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div className="container-fluid">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Kanban</strong>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample02"
                        aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            elo
                        </li>
                    </ul>
                </div>

                <button onClick={createNewListButtonHandler} className="btn btn-outline-light">
                    Dodaj nową listę
                </button>
            </div>
        </nav>
    );
}