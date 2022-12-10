import {Plus} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../app/store";
import {CardListItem, cardSelectors} from "../../card";
import {List, remove} from "../listSlice";
import {useModalAction} from "../../modalAction";
import ModalLink from "../../../components/helpers/ModalLink";
import {useDrop} from "react-dnd";
import {moveCard} from "../../card/cardSlice";

interface ListViewProps {
    list: List
}

export default function ListView({list}: ListViewProps) {
    const cardsData = useSelector((state: ApplicationState) => cardSelectors.getCardsByListID(state, list.id));
    const cards = cardsData.map(card => <CardListItem key={card.id} card={card} />);
    const {showUpdateListModal} = useModalAction();
    const dispatch = useDispatch();

    const onDrop = (cardID: number) => {
        dispatch(moveCard(cardID, list.id));
    }

    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        drop: (item: any) => {
            onDrop(item.cardID);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    function clickRemoveListHandler(e: any) {
        e.preventDefault();
        dispatch(remove(list.id));
    }

    return (
        <div className="card rounded-0 me-3" style={{width: '300px'}}>
            <div ref={drop} className="card-body pt-2 bg-light">
                <div className="mb-2">
                    <h5 onClick={() => {showUpdateListModal(list.id)}} className="card-title d-inline" style={{cursor: "pointer"}}>{list.title}</h5>
                    <ModalLink to={`/lists/${list.id}/cards/create`}>
                        <Plus
                            className="float-end fs-2 text-secondary"
                            style={{marginTop: "-3px", marginRight: "-7px"}}
                        />
                    </ModalLink>
                </div>

                {cards}


            </div>
            <div className="card-footer border-0 text-center text-danger float-end">
                <a onClick={clickRemoveListHandler} className="m-0 text-decoration-none text-danger" href="#">Usuń listę</a>
            </div>
        </div>
    );
}