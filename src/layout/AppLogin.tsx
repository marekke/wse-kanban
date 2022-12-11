import {useDispatch} from "react-redux";
import {useState} from "react";
import {userActions} from "../feature/user";
import {useNavigate} from "react-router-dom";

export default function AppLogin() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loadExampleData = () => {
        dispatch({type: "app/load_example_data"});
        navigate("/");
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(userActions.login(name));
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mx-auto mt-5">
                    <div className="card">
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

                    <div className="d-grid">
                        <button onClick={loadExampleData} className="btn btn-secondary btn-block mt-5 float-end">Załaduj przykładowe dane</button>
                    </div>
                </div>
            </div>
        </div>
    );
}