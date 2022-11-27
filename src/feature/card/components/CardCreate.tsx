import CardForm, {ICardFormData} from "./CardForm";
import {useDispatch} from "react-redux";
import {create} from "../cardSlice";
import {hide} from "../../modalAction";

interface CardCreateProps {
    listID: number
}

export default function CardCreate({listID}: CardCreateProps) {
    const dispatch = useDispatch();

    function formSubmitHandler(formData: ICardFormData) {
        dispatch(create({
            listID,
            title: formData.title,
            content: formData.content,
        }));
        dispatch(hide());
    }

    return (
        <CardForm submitHandler={formSubmitHandler} />
    );
}