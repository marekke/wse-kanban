import {useDispatch, useSelector} from "react-redux";
import {getCardByID} from "../selectors";
import {ApplicationState} from "../../../app/store";
import {useNavigate, useParams} from "react-router-dom";
import ModalLink from "../../../components/helpers/ModalLink";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {getLists} from "../../list/selectors";
import {List} from "../../list";
import {moveCard, remove} from "../cardSlice";


export default function CardView() {
    const params = useParams();
    const cardID = Number(params.cardID);

    const card = useSelector((state: ApplicationState) => getCardByID(state, Number(cardID)));
    const lists = useSelector((state: ApplicationState) => getLists(state));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const moveDropdownElements = lists.filter(list => list.id !== card.listID).map((list: List) => {
        return <Dropdown.Item style={{fontSize: 14}} onClick={() => doMoveCard(list.id)}>{list.title}</Dropdown.Item>
    });

    function doMoveCard(listID: number) {
        dispatch(moveCard(cardID, listID));
        navigate('/');
    }

    function onDeleteCardButtonHandler() {
        dispatch(remove(cardID));
        navigate('/');
    }

    return (
        <>
            <div className="text-end">
                <ModalLink to={`/cards/${cardID}/update`}>
                    <button className="btn btn-sm btn-primary me-2">Edytuj</button>
                </ModalLink>

                <button onClick={onDeleteCardButtonHandler} className="btn btn-sm btn-danger me-2">Usuń</button>

                <DropdownButton className="d-inline" size="sm" title="Przenieś" variant="secondary" drop="down">
                    {moveDropdownElements}
                </DropdownButton>
            </div>
            <div className="mt-3">
                <label className="fw-bolder">Tytuł:</label>
                <p>{card.title}</p>
            </div>

            <div className="mt-4">
                <label className="fw-bolder">Treść:</label>
                <div>{card.content}</div>
            </div>
        </>
    );
}