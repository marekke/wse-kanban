import {useDispatch, useSelector} from "react-redux";
import {userActions, userSelectors} from "../feature/user";

export default function AppLayoutNavbar() {
    const user = useSelector(userSelectors.getLoggedUser);
    const dispatch = useDispatch();

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

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                {user?.name}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li className='dropdown-item' style={{fontSize: 14, cursor: "pointer"}} onClick={() => dispatch(userActions.logout())}>Wyloguj</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}