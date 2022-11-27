import {useState} from "react";
import {List} from "../listSlice";

interface ListFormProps {
    list?: List
    submitHandler: (title: string) => void
}

export default function ListForm({list, submitHandler}: ListFormProps) {
    const [title, setTitle] = useState(list?.title || "");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        submitHandler(title);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nazwa listy</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title}/>
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-success float-end">Zapisz</button>
                </div>
            </form>

        </>
    );
}