import CardForm, {ICardFormData} from "./CardForm";
import {useDispatch} from "react-redux";
import {create} from "../cardSlice";
import {useNavigate, useParams} from "react-router-dom";


export default function CardCreate() {
    const {listID} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function formSubmitHandler(formData: ICardFormData) {
        dispatch(create({
            listID: Number(listID),
            title: formData.title,
            content: formData.content,
        }));
        navigate(-1);
    }

    return (
        <CardForm submitHandler={formSubmitHandler} />
    );
}