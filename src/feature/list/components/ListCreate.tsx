import ListForm from "./ListForm";
import {create} from "../listSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function ListCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function formSubmitHandler(title: string) {
        dispatch(create({title}));
        navigate(-1);
    }

    return (<ListForm submitHandler={formSubmitHandler} />)
}