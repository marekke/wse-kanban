import {Plus} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../app/store";
import {CardListItem, cardSelectors} from "../../card";
import {List} from "../listSlice";
import {useModalAction} from "../../modalAction";

interface ListViewProps {
    list: List
}

export default function ListView({list}: ListViewProps) {
    const cardsData = useSelector((state: ApplicationState) => cardSelectors.getCardsByListID(state, list.id));
    const cards = cardsData.map(card => <CardListItem key={card.id} card={card} />);
    const {showUpdateListModal} = useModalAction();


    return (
        <div className="card rounded-0 me-3" onClick={() => {showUpdateListModal(list.id)}} style={{width: '300px'}}>
            <div className="card-body pt-2 bg-light">
                <div className="mb-2">
                    <h5 className="card-title d-inline" style={{cursor: "pointer"}}>{list.title}</h5>
                    <Plus
                        className="float-end fs-2 text-secondary"
                        style={{marginTop: "-3px", marginRight: "-7px"}}
                    />
                </div>

                {cards}
            </div>
        </div>
    );
}