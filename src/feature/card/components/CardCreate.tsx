import CardForm, {ICardFormData} from "./CardForm";
import {useDispatch, useSelector} from "react-redux";
import {create} from "../cardSlice";
import {useNavigate, useParams} from "react-router-dom";
import {getLoggedUser} from "../../user/selectors";


export default function CardCreate() {
    const {listID} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedUser);

    function formSubmitHandler(formData: ICardFormData) {
        dispatch(create({
            listID: Number(listID),
            title: formData.title,
            content: formData.content,
            users: [user!.id]
        }));
        navigate(-1);
    }

    return (
        <CardForm submitHandler={formSubmitHandler} />
    );
}