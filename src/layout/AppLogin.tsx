import {useDispatch} from "react-redux";
import {useState} from "react";
import {userActions} from "../feature/user";
import {useNavigate} from "react-router-dom";

export default function AppLogin() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(userActions.login(name));
        navigate("/");
    }

    return (
        <div className="container">
            <div className="card mt-5 col-5 mx-auto">
                <div className="card-header">
                    Zaloguj się
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="form-label fw-bolder">Imię</label>
                            <input type="text" className="form-control"  onChange={e => setName(e.target.value)} value={name} />
                        </div>

                        <div className="mt-3">
                            <button type="submit" className="btn btn-outline-primary float-end">Zaloguj</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}