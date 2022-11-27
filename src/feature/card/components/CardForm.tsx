import {useState} from "react";

export interface ICardFormData {
    title: string,
    content: string
};

interface CardFormProps {
    submitHandler: (formData: ICardFormData) => void
}

export default function CardForm({submitHandler}: CardFormProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        submitHandler({
            title,
            content
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nazwa karty</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="mt-3">
                <label>Treść</label>
                <textarea className="form-control" rows={4} value={content} onChange={(e) => setContent(e.target.value)}>
                </textarea>
            </div>

            <div className="mt-3">
                <button type="submit" className="btn btn-success float-end">Zapisz</button>
            </div>

        </form>
    );
}