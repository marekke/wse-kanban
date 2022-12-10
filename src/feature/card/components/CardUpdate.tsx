import CardForm, {ICardFormData} from "./CardForm";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../cardSlice";
import {useNavigate, useParams} from "react-router-dom";
import {ApplicationState} from "../../../app/store";
import {getCardByID} from "../selectors";


export default function CardUpdate() {
    const {cardID} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const card = useSelector((state: ApplicationState) => getCardByID(state, Number(cardID)));

    function formSubmitHandler(formData: ICardFormData) {
        dispatch(update({
            id: Number(cardID),
            title: formData.title,
            content: formData.content
        }));

        navigate('/');
    }

    return (
        <CardForm card={card} submitHandler={formSubmitHandler} />
    );
}