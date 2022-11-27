import {Plus} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../app/store";
import {CardListItem, cardSelectors} from "../../card";
import {List, remove} from "../listSlice";
import {useModalAction} from "../../modalAction";

interface ListViewProps {
    list: List
}

export default function ListView({list}: ListViewProps) {
    const cardsData = useSelector((state: ApplicationState) => cardSelectors.getCardsByListID(state, list.id));
    const cards = cardsData.map(card => <CardListItem key={card.id} card={card} />);
    const {showUpdateListModal} = useModalAction();
    const dispatch = useDispatch();

    function clickRemoveListHandler(e: any) {
        e.preventDefault();
        dispatch(remove(list.id));
    }

    return (
        <div className="card rounded-0 me-3" style={{width: '300px'}}>
            <div className="card-body pt-2 bg-light">
                <div className="mb-2">
                    <h5 onClick={() => {showUpdateListModal(list.id)}} className="card-title d-inline" style={{cursor: "pointer"}}>{list.title}</h5>
                    <Plus
                        className="float-end fs-2 text-secondary"
                        style={{marginTop: "-3px", marginRight: "-7px"}}
                    />
                </div>

                {cards}

            </div>
            <div className="card-footer border-0 text-center text-danger float-end">
                <a onClick={clickRemoveListHandler} className="m-0 text-decoration-none text-danger" href="#">Usuń listę</a>
            </div>
        </div>
    );
}