import ListForm from "./ListForm";
import {useDispatch, useSelector} from "react-redux";
import {getListByID} from "../selectors";
import {ApplicationState} from "../../../app/store";
import {hide} from "../../modalAction";
import {update} from "../listSlice";

interface ListUpdateProps {
    listID: number
}

export default function ListUpdate({listID}: ListUpdateProps) {
    const list = useSelector((state: ApplicationState) => getListByID(state, listID));
    const dispatch = useDispatch();

    function formSubmitHandler(title: string) {
        dispatch(update({id: listID, title}));
        dispatch(hide());
    }

    return (
        <ListForm list={list} submitHandler={formSubmitHandler} />
    );
}