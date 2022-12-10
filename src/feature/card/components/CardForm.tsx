import {useState} from "react";
import {Card} from "../cardSlice";

export interface ICardFormData {
    title: string,
    content: string
};

interface CardFormProps {
    card?: Card
    submitHandler: (formData: ICardFormData) => void
}

export default function CardForm({card, submitHandler}: CardFormProps) {
    const [title, setTitle] = useState(card?.title || "");
    const [content, setContent] = useState(card?.content || "");

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
                <textarea className="form-control" rows={6} value={content} onChange={(e) => setContent(e.target.value)}>
                </textarea>
            </div>

            <div className="mt-3">
                <button type="submit" className="btn btn-success float-end">Zapisz</button>
            </div>

        </form>
    );
}