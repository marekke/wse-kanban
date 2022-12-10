import ListForm from "./ListForm";
import {useDispatch, useSelector} from "react-redux";
import {getListByID} from "../selectors";
import {ApplicationState} from "../../../app/store";
import {update} from "../listSlice";
import {useNavigate, useParams} from "react-router-dom";


export default function ListUpdate() {
    const {listID} = useParams();
    const navigate = useNavigate();

    const list = useSelector((state: ApplicationState) => getListByID(state, Number(listID)));
    const dispatch = useDispatch();

    function formSubmitHandler(title: string) {
        dispatch(update({id: Number(listID), title}));
        navigate(-1);
    }

    return (
        <ListForm list={list} submitHandler={formSubmitHandler} />
    );
}