import {useState} from "react";
import {useDispatch} from "react-redux";
import {create} from "../listSlice";
import {hide} from "../../modalAction";

export default function ListForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(create({title, cardsID: []}));
        dispatch(hide());
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nazwa listy</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title}/>
                </div>
                <div className="text-end mt-3">
                    <button type="submit" className="btn btn-success">Utwórz</button>
                </div>
            </form>
        </>
    );
}