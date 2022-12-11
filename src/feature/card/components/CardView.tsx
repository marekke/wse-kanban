import {useDispatch, useSelector} from "react-redux";
import {getCardByID} from "../selectors";
import {ApplicationState} from "../../../app/store";
import {useNavigate, useParams} from "react-router-dom";
import ModalLink from "../../../components/helpers/ModalLink";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {getLists} from "../../list/selectors";
import {List} from "../../list";
import {moveCard, remove} from "../cardSlice";
import {userSelectors} from "../../user";
import Avatar from "react-avatar";
import {IUser} from "../../user/userSlice";
import {cardActions} from "../index";
import confirmationAlert from "../../../app/confirmationAlert";


export default function CardView() {
    const params = useParams();
    const cardID = Number(params.cardID);

    const card = useSelector((state: ApplicationState) => getCardByID(state, Number(cardID)));
    const lists = useSelector((state: ApplicationState) => getLists(state));
    const allUsers = useSelector(userSelectors.getAllUsers);
    const users = allUsers.filter((user: IUser) => card.users.includes(user.id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const moveDropdownElements = lists.filter(list => list.id !== card.listID).map((list: List) => {
        return <Dropdown.Item style={{fontSize: 14}} onClick={() => doMoveCard(list.id)}>{list.title}</Dropdown.Item>
    });

    const addUserDropdownElements = allUsers.filter(user => !card.users.includes(user.id)).map((user: IUser) => {
        return <Dropdown.Item style={{fontSize: 14}} onClick={() => doAssign(user.id)}>{user.name}</Dropdown.Item>;
    });

    const usersAvatars = users.map(user =>
        <Avatar onClick={() => {doRemoveUserFromCard(user.id)}} style={{cursor: "pointer"}} className={"me-2"} size={"30"} textSizeRatio={1.8} round={true} title={user.name}  key={user.id} name={`${user.name}`} />
    );

    function doAssign(userID: number) {
        dispatch(cardActions.assignUserToCard(cardID, userID));
    }

    function doMoveCard(listID: number) {
        dispatch(moveCard(cardID, listID));
        navigate('/');
    }

    function doRemoveUserFromCard(userID: number) {
        confirmationAlert("Czy na pewno usunąć użytkownika z karty?",
            () => {dispatch(cardActions.removeUserFromCard(cardID, userID))});
    }

    function onDeleteCardButtonHandler() {
        confirmationAlert("Czy na pewno usunąć kartę?", () => {
            dispatch(remove(cardID));
            navigate('/');
        });
    }

    return (
        <>
            <div className="text-end">
                <div className="d-inline float-start">
                    {usersAvatars}
                    <DropdownButton className="d-inline" size="sm" title="Dodaj" variant="secondary" drop="down">
                        {addUserDropdownElements}
                    </DropdownButton>
                </div>

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