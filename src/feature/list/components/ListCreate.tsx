import ListForm from "./ListForm";
import {create} from "../listSlice";
import {hide} from "../../modalAction";
import {useDispatch} from "react-redux";

export default function ListCreate() {
    const dispatch = useDispatch();

    function formSubmitHandler(title: string) {
        dispatch(create({title}));
        dispatch(hide());
    }

    return (<ListForm submitHandler={formSubmitHandler} />)
}